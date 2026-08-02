---
skill_name: AI Agent Architecture
description: Design scalable agents with planning, memory, tools, reflection loops, and multi-agent systems
category: AI/LLM
version: 1.0.0
---

# AI Agent Architecture

## Overview
Production agents combine planning, memory, tools, and reflection. Multi-agent systems solve complex problems through coordination.

## Core Components

### Planning & Decomposition

```python
from langchain.agents import AgentExecutor, create_react_agent
from langchain_openai import ChatOpenAI
from langchain.prompts import PromptTemplate

class PlanningAgent:
    """Break goals into sub-tasks"""

    def __init__(self):
        self.llm = ChatOpenAI(model="gpt-4", temperature=0)

    def create_plan(self, goal: str) -> list:
        """Generate structured plan"""

        prompt = f"""Goal: {goal}

Create a detailed step-by-step plan. Return as numbered list.
Each step should be:
1. Clear and actionable
2. Dependent on previous steps where needed
3. Specific about success criteria

Plan:"""

        response = self.llm.invoke(prompt)
        lines = response.content.split("\n")

        # Parse plan
        plan = []
        for line in lines:
            if line.strip() and line[0].isdigit():
                plan.append(line.strip())

        return plan

planner = PlanningAgent()
plan = planner.create_plan("Build a recommendation system for movies")

for step in plan:
    print(step)
    # Output:
    # 1. Define user profiling requirements...
    # 2. Gather historical data on user preferences...
    # etc.
```

### Memory Systems

#### Conversation Memory

```python
from langchain.memory import ConversationBufferWindowMemory

# Keep last N messages in context
memory = ConversationBufferWindowMemory(
    k=5,  # Keep last 5 turns
    memory_key="chat_history",
    return_messages=True
)

# Add to conversation
memory.chat_memory.add_user_message("What is AI?")
memory.chat_memory.add_ai_message("AI is artificial intelligence...")

memory.chat_memory.add_user_message("Give examples")
memory.chat_memory.add_ai_message("Examples include: 1) Chatbots 2) Image recognition...")

# Retrieve history
print(memory.load_memory_variables({}))
```

#### Persistent Memory (Long-term)

```python
import json
from datetime import datetime

class AgentMemory:
    """Long-term memory for agents"""

    def __init__(self, memory_file: str = "agent_memory.json"):
        self.memory_file = memory_file
        self.data = self._load()

    def _load(self) -> dict:
        try:
            with open(self.memory_file, "r") as f:
                return json.load(f)
        except FileNotFoundError:
            return {
                "facts": [],
                "learned_patterns": [],
                "task_history": [],
                "user_preferences": {}
            }

    def store_fact(self, fact: str):
        """Store important facts"""
        self.data["facts"].append({
            "content": fact,
            "timestamp": datetime.now().isoformat(),
            "importance": 0.5
        })
        self._save()

    def store_pattern(self, pattern: str):
        """Store learned patterns"""
        self.data["learned_patterns"].append({
            "pattern": pattern,
            "discovered": datetime.now().isoformat()
        })
        self._save()

    def retrieve_relevant(self, query: str) -> list:
        """Retrieve relevant memories"""
        from sentence_transformers import SentenceTransformer
        import numpy as np

        model = SentenceTransformer("all-MiniLM-L6-v2")

        query_emb = model.encode(query)
        memories = self.data["facts"] + self.data["learned_patterns"]

        # Score relevance
        results = []
        for mem in memories:
            text = mem.get("content") or mem.get("pattern")
            mem_emb = model.encode(text)
            similarity = np.dot(query_emb, mem_emb)
            results.append((mem, similarity))

        return sorted(results, key=lambda x: x[1], reverse=True)[:5]

    def _save(self):
        with open(self.memory_file, "w") as f:
            json.dump(self.data, f, indent=2)
```

### Tool Integration

```python
from langchain_core.tools import BaseTool
from pydantic import BaseModel, Field
import requests

class WebSearchInput(BaseModel):
    query: str = Field(..., description="Search query")

class WebSearchTool(BaseTool):
    name = "web_search"
    description = "Search the web for information"
    args_schema = WebSearchInput

    def _run(self, query: str) -> str:
        """Execute search"""
        try:
            response = requests.get(
                "https://api.duckduckgo.com/",
                params={"q": query, "format": "json"}
            )
            results = response.json()
            # Format results
            formatted = "\n".join([
                f"{r.get('title', '')}: {r.get('snippet', '')}"
                for r in results.get("Results", [])[:5]
            ])
            return formatted or "No results found"
        except Exception as e:
            return f"Search error: {str(e)}"

    async def _arun(self, query: str) -> str:
        """Async version"""
        return self._run(query)
```

## Reflection & Self-Correction

```python
class ReflectiveAgent:
    """Agent that reflects on actions and corrects course"""

    def __init__(self):
        self.llm = ChatOpenAI(model="gpt-4", temperature=0)

    def execute_with_reflection(self, task: str, max_iterations: int = 3):
        """Execute task with built-in reflection"""

        current_state = {"task": task, "attempts": [], "result": None}

        for iteration in range(max_iterations):
            # Execute
            result = self._execute(task)
            current_state["attempts"].append({
                "iteration": iteration + 1,
                "result": result
            })

            # Reflect on result
            reflection = self._reflect(task, result, iteration)

            if reflection["is_satisfied"]:
                current_state["result"] = result
                return current_state

            if reflection["correction_needed"]:
                task = reflection["revised_task"]

        return current_state

    def _execute(self, task: str) -> str:
        """Execute task"""
        response = self.llm.invoke(f"Complete this task: {task}")
        return response.content

    def _reflect(self, original_task: str, result: str, iteration: int) -> dict:
        """Reflect on result and decide if satisfied"""

        prompt = f"""Task: {original_task}
Result: {result}
Iteration: {iteration + 1}

Self-evaluate:
1. Does this result fully answer the task? (yes/no)
2. What's missing or incorrect?
3. How should I revise the task for next attempt?

Respond in JSON: {{"is_satisfied": bool, "correction_needed": bool, "revised_task": str}}"""

        response = self.llm.invoke(prompt)

        import json
        try:
            return json.loads(response.content)
        except:
            return {
                "is_satisfied": True,
                "correction_needed": False,
                "revised_task": original_task
            }
```

## Multi-Agent Orchestration

### Agent Swarm Pattern

```python
from dataclasses import dataclass
from enum import Enum

class AgentRole(Enum):
    RESEARCHER = "researcher"
    ANALYST = "analyst"
    WRITER = "writer"
    REVIEWER = "reviewer"

@dataclass
class AgentTask:
    agent_role: AgentRole
    task: str
    context: dict

class MultiAgentOrchestrator:
    """Coordinate multiple specialized agents"""

    def __init__(self):
        self.agents = {
            AgentRole.RESEARCHER: self._create_researcher(),
            AgentRole.ANALYST: self._create_analyst(),
            AgentRole.WRITER: self._create_writer(),
            AgentRole.REVIEWER: self._create_reviewer()
        }
        self.task_queue = []
        self.results = {}

    def execute_workflow(self, initial_goal: str) -> str:
        """Execute multi-agent workflow"""

        # Stage 1: Research
        research_result = self.agents[AgentRole.RESEARCHER].execute(
            AgentTask(
                agent_role=AgentRole.RESEARCHER,
                task=f"Research: {initial_goal}",
                context={}
            )
        )

        # Stage 2: Analysis
        analysis_result = self.agents[AgentRole.ANALYST].execute(
            AgentTask(
                agent_role=AgentRole.ANALYST,
                task=f"Analyze: {research_result}",
                context={"research": research_result}
            )
        )

        # Stage 3: Writing
        writing_result = self.agents[AgentRole.WRITER].execute(
            AgentTask(
                agent_role=AgentRole.WRITER,
                task=f"Write comprehensive report",
                context={"research": research_result, "analysis": analysis_result}
            )
        )

        # Stage 4: Review
        final_result = self.agents[AgentRole.REVIEWER].execute(
            AgentTask(
                agent_role=AgentRole.REVIEWER,
                task=f"Review and finalize",
                context={"draft": writing_result}
            )
        )

        return final_result

    def _create_researcher(self):
        return Agent(role="Researcher", instructions="Find and summarize information")

    def _create_analyst(self):
        return Agent(role="Analyst", instructions="Analyze patterns and insights")

    def _create_writer(self):
        return Agent(role="Writer", instructions="Compose clear, well-structured content")

    def _create_reviewer(self):
        return Agent(role="Reviewer", instructions="Quality check and improve")

class Agent:
    def __init__(self, role: str, instructions: str):
        self.role = role
        self.instructions = instructions
        self.llm = ChatOpenAI(model="gpt-4")

    def execute(self, task: AgentTask) -> str:
        prompt = f"""Role: {self.instructions}
Task: {task.task}
Context: {task.context}

Execute your role and provide output:"""

        response = self.llm.invoke(prompt)
        return response.content
```

## Error Recovery

```python
class ResilientAgent:
    """Agent with error recovery strategies"""

    def __init__(self):
        self.llm = ChatOpenAI(model="gpt-4")
        self.error_history = []

    def execute_with_recovery(self, task: str, max_retries: int = 3):
        """Execute with automatic retry and escalation"""

        for attempt in range(max_retries):
            try:
                result = self._execute(task)
                return result
            except Exception as e:
                self.error_history.append({
                    "attempt": attempt + 1,
                    "error": str(e)
                })

                if attempt < max_retries - 1:
                    # Adjust strategy
                    task = self._revise_task_after_error(task, str(e))

        # All retries failed, escalate
        return self._escalate_to_human(task, self.error_history)

    def _execute(self, task: str) -> str:
        response = self.llm.invoke(f"Execute: {task}")
        return response.content

    def _revise_task_after_error(self, task: str, error: str) -> str:
        prompt = f"""Task failed: {error}
Original task: {task}

Suggest revised task to overcome this error:"""

        response = self.llm.invoke(prompt)
        return response.content

    def _escalate_to_human(self, task: str, error_history: list) -> str:
        return {
            "status": "escalated",
            "original_task": task,
            "errors": error_history,
            "action": "Requires human intervention"
        }
```

## Production Checklist

- [ ] Define clear agent roles and responsibilities
- [ ] Implement planning module for task decomposition
- [ ] Add conversation memory for context retention
- [ ] Store long-term facts and patterns
- [ ] Integrate essential tools with error handling
- [ ] Implement reflection loops for self-correction
- [ ] Design multi-agent orchestration workflow
- [ ] Add error recovery and escalation paths
- [ ] Monitor agent performance and decisions
- [ ] Log all agent reasoning for debugging
- [ ] Test on complex multi-step tasks
- [ ] Implement timeout protection
- [ ] Version control agent prompts and rules
- [ ] Set up dashboards for agent metrics
