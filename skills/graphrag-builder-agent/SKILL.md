---
name: graphrag-builder-agent
description: Build knowledge graphs from document corpuses with entity extraction, relationship mapping, graph construction, and continuous enrichment
source_group: agents
imported_from: graphrag-builder-agent.md
agent_name: graphrag-builder-agent
category: knowledge-management
version: 1.0.0
skills_used: [entity-extraction, relationship-mapping, knowledge-graph-construction, semantic-enrichment, graph-querying]
---

# GraphRAG Builder Agent

## Purpose
The GraphRAG Builder Agent transforms unstructured text (documents, research, reports) into queryable knowledge graphs. It extracts entities, maps relationships, visualizes connections, and enables semantic search across large document corpuses. Powers AI-driven discovery and decision-making.

Ideal for research teams, enterprises managing institutional knowledge, and organizations seeking better information retrieval than keyword search.

## Capabilities
- **Entity Extraction**: Identify people, companies, concepts, locations, products from text
- **Relationship Mapping**: Extract how entities relate (created, acquired, criticized, similar to)
- **Graph Construction**: Build multi-typed nodes and edges from extracted data
- **Entity Resolution**: Merge duplicate entities (same company referred to different ways)
- **Semantic Enrichment**: Add properties and context to entities
- **Query Interface**: Enable natural language questions against graph
- **Visualization**: Create interactive graph visualizations
- **Continuous Learning**: Add new documents and auto-update graph
- **Community Detection**: Find clusters of related entities
- **Recommendation Engine**: Suggest related entities and insights

## Workflow

1. **Corpus Preparation**
   - Ingest documents (PDFs, web pages, research reports, articles)
   - Extract text from documents
   - Chunk documents into appropriate sections
   - Remove noise (headers, footers, metadata)
   - Tag document source and metadata

2. **Entity Extraction**
   - Identify entity types (people, organizations, concepts, products, locations)
   - Extract mentions with context
   - Classify entity importance (primary, secondary, referenced)
   - Note entity properties (founded date, industry, leadership)
   - Flag entities for manual review (ambiguous, multiple meanings)

3. **Relationship Identification**
   - Extract entity relationships (creates, owns, criticizes, similar to, competes with)
   - Assign relationship types with confidence scores
   - Note relationship context and evidence
   - Extract directionality (A creates B vs. B is created by A)
   - Identify relationship strength (primary, supporting, mentioned)

4. **Entity Resolution**
   - Identify duplicate entities (same company, different names)
   - Merge duplicates with evidence tracking
   - Normalize naming conventions
   - Link aliases (Microsoft, MSFT, Microsoft Corporation)
   - Track name changes (pre/post acquisition)

5. **Graph Construction**
   - Create graph database structure
   - Add nodes for each entity with properties
   - Add edges for relationships with metadata
   - Create indexes for fast querying
   - Build full-text search indices

6. **Semantic Enrichment**
   - Add entity embeddings for similarity search
   - Create entity clusters by semantic similarity
   - Add derived properties (entity importance, centrality)
   - Link to external knowledge bases (Wikipedia, Crunchbase)
   - Generate entity summaries from corpus context

7. **Quality Assurance**
   - Manually review high-confidence extractions (sample)
   - Flag low-confidence entities for review
   - Validate relationship accuracy
   - Correct extracted data based on feedback
   - Track extraction confidence metrics

8. **Query & Interface Development**
   - Create query interface (natural language, structured queries)
   - Enable entity exploration (click to drill down)
   - Build relationship filters and traversal
   - Create visualization (graph with zoom/pan)
   - Enable export (JSON, CSV, visual formats)

9. **Continuous Evolution**
   - Ingest new documents
   - Update graph incrementally
   - Track version history
   - Enable user feedback loop (upvote/downvote extractions)
   - Learn from corrections

## Input Requirements
- **Document Corpus**: PDFs, web pages, research reports, articles to analyze
- **Entity Types**: What kinds of entities to extract (people, companies, concepts, etc.)
- **Domain**: Subject matter (investment research, market intelligence, patent analysis, etc.)
- **Use Cases**: How the graph will be used (discovery, compliance, recommendation, etc.)
- **Glossary**: Industry-specific terms or entities to prioritize
- **Scale**: Number of documents, expected entity count, query frequency

## Output Format
```
# Knowledge Graph Report: [Domain/Topic]

## Overview
- **Documents Ingested**: [N] documents
- **Entities Extracted**: [N] total entities
- **Relationships Mapped**: [N] total relationships
- **Unique Entity Types**: [List: Person, Company, Concept, Product, Location]
- **Most Connected Entities**: [Top 5 entities by degree]
- **Extraction Confidence**: [X]% average confidence score

---

## Entity Summary

### Entities by Type
| Type | Count | Examples |
|------|-------|----------|
| Company | [N] | [Example 1, 2, 3] |
| Person | [N] | [Example 1, 2, 3] |
| Product | [N] | [Example 1, 2, 3] |
| Concept | [N] | [Example 1, 2, 3] |
| Location | [N] | [Example 1, 2, 3] |

### Top Entities by Mention Frequency
1. [Entity Name] Ã¢â‚¬â€ [N] mentions across [M] documents
   - Key Properties: [Relevant attributes]
   - Most Common Context: [How entity is discussed]

2. [Entity Name] Ã¢â‚¬â€ [N] mentions
   - Key Properties: [Relevant attributes]
   - Most Common Context: [How entity is discussed]

---

## Relationship Network

### Top Relationships by Frequency
| Entity A | Relationship | Entity B | Frequency | Confidence |
|----------|-------------|----------|-----------|-----------|
| [Entity] | [Type] | [Entity] | [N] documents | [X]% |
| [Entity] | [Type] | [Entity] | [N] documents | [X]% |

### Relationship Types Extracted
- **Creates / Produces**: [Count] relationships (A creates product B)
- **Acquires**: [Count] relationships (A acquires B)
- **Competes With**: [Count] relationships (A competes with B)
- **Criticizes / Argues Against**: [Count] relationships (A criticizes B)
- **Similar To**: [Count] relationships (A is similar to B)
- **Partners With**: [Count] relationships (A partners with B)
- **[Custom Type]**: [Count] relationships

---

## Graph Visualizations

### Central Hub Entities
[Graph showing most-connected entities and their direct relationships]

**Analysis**: [Entity 1] is the most central entity (connected to [N] other entities), suggesting it's a major player in this domain.

### Community Clusters
[Graph showing semantic clusters of related entities]

**Clusters Identified**:
1. **[Cluster Name]**: [Entities in cluster] Ã¢â‚¬â€ connected by [relationship theme]
2. **[Cluster Name]**: [Entities in cluster] Ã¢â‚¬â€ connected by [relationship theme]

---

## Search & Discovery Examples

### Query 1: "What companies does [Person] work for?"
**Answer**:
- [Company 1] Ã¢â‚¬â€ As [Position] (mentioned [N] times)
- [Company 2] Ã¢â‚¬â€ As [Position] (mentioned [N] times)

**Evidence**: [Source documents where this information appears]

### Query 2: "Who are the main competitors of [Company]?"
**Answer**:
- [Competitor 1] Ã¢â‚¬â€ Competes in [market segment] (mentioned [N] times)
- [Competitor 2] Ã¢â‚¬â€ Competes in [market segment] (mentioned [N] times)

**Evidence**: [Document excerpts with competitive relationships]

### Query 3: "What is [Entity] similar to?"
**Answer**:
- [Similar Entity 1] Ã¢â‚¬â€ [Reason for similarity]
- [Similar Entity 2] Ã¢â‚¬â€ [Reason for similarity]

**Evidence**: [Documents comparing entities]

---

## Entity Deep Dives

### [Entity Name] Profile
- **Type**: [Company / Person / Concept]
- **Mentions**: [N] across [M] documents
- **Confidence**: [X]%
- **Key Properties**:
  - Founded: [Date]
  - Industry: [Sector]
  - Headquarters: [Location]
  - Key People: [Names]
  - Notable Products: [List]

**Relationships**:
- **Creates**: [Product 1, 2, 3]
- **Competes With**: [Company 1, 2, 3]
- **Partners With**: [Entity 1, 2, 3]
- **Acquired By**: [Acquirer] in [Year]
- **Criticisms**: [Main criticisms mentioned]

**Semantic Similarity**:
- Most Similar Entities: [Entity 1] (similarity: [X]%), [Entity 2] (similarity: [X]%)

**Context**: [Summary of how this entity is discussed across corpus]

---

## Extraction Quality Assessment

### Confidence Distribution
| Confidence Range | Entity Count | Recommendation |
|------------------|-------------|------------------|
| 90-100% | [N] | Accept as-is; high quality |
| 80-89% | [N] | Review sample; mostly good |
| 70-79% | [N] | Manual review recommended |
| <70% | [N] | Likely errors; exclude or review |

### Common Extraction Challenges
1. **Entity Ambiguity**: [Example] could refer to [Entity A] or [Entity B]
   - Resolution: [How this was handled]
   - Confidence Impact: [Lowered confidence to X%]

2. **Relationship Ambiguity**: [Example]
   - Resolution: [How this was handled]
   - Confidence Impact: [Lowered confidence to X%]

### Manual Review Findings
- **Corrections Made**: [N] entities/relationships corrected
- **Duplicates Merged**: [N] entity duplicates merged
- **False Positives Removed**: [N] incorrect extractions removed
- **Missing Entities Added**: [N] entities added from manual review
- **Updated Confidence**: Average confidence now [X]% (was [Y]%)

---

## Graph Statistics

### Network Metrics
- **Graph Density**: [X]% (how connected is the graph)
- **Average Path Length**: [X] hops between entities
- **Clustering Coefficient**: [X]% (how clustered are neighborhoods)
- **Betweenness Centrality**: [Top entities serving as bridges]

### Entity Degree Distribution
- **Average Entity Degree**: [N] connections per entity
- **Max Degree**: [Entity] with [N] connections
- **Min Degree**: [N] (isolated entities)
- **Median Degree**: [N]

---

## Use Cases Enabled

### 1. Intelligence Analysis
"Find all relationships between [Company A] and [Company B]"
- Direct relationships: [N]
- Through intermediaries: [N] paths of length 2+
- Implications: [Business implications of relationships]

### 2. Market Intelligence
"What companies are entering [Market]?"
- New entrants: [List with entry year]
- How they're entering: [Acquisition / partnership / organic]
- Competitive implications: [Analysis]

### 3. Due Diligence
"What are the red flags associated with [Company]?"
- Criticisms: [List from documents]
- Legal issues: [If mentioned]
- Competitive disadvantages: [Analysis]

### 4. Recommendation Engine
"If I'm interested in [Entity], what else should I know?"
- Similar entities: [Recommendations]
- Related entities: [Recommendations]
- Market dynamics: [Relevant context]

---

## Continuous Improvement Plan

### New Document Ingestion
- **Frequency**: [Weekly / Monthly / On-demand]
- **Quality Control**: [Manual review percentage]
- **Feedback Loop**: [How users correct extraction]
- **Version Management**: [Track graph versions]

### Entity Resolution Improvements
- **Duplicate Detection**: [Method for finding duplicates]
- **Merge Verification**: [Process for validating merges]
- **Alias Management**: [How alternative names tracked]

### Relationship Extraction Refinement
- **Type Coverage**: [Are all important relationship types covered?]
- **Directionality**: [Are relationships correctly directed?]
- **Strength Indicators**: [Are strong vs. weak relationships distinguished?]

---

## Access & Integration

### Query Interface
- **Type**: [Web UI / API / Graph Query Language (SPARQL, Cypher)]
- **Authentication**: [Public / Authenticated users]
- **Rate Limits**: [If API: requests per minute]
- **Data Export**: [CSV, JSON, RDF formats supported]

### API Documentation
[Endpoint list if API-based]

### Graph Database
- **Backend**: [Neo4j / AWS Neptune / Dgraph / Custom]
- **Query Language**: [Cypher / SPARQL / Custom]
- **Size**: [Storage capacity, query performance]

---

## Recommendations

1. **Expand Corpus**: Add [suggested document sources] to increase coverage
2. **Refine Entity Types**: Consider adding [entity types] for your use case
3. **Relationship Types**: Add [relationship types] if discovering gaps
4. **Integration**: Connect to [external data sources] for enrichment
5. **Visualization**: Build [custom visualizations] for specific use cases
```

## Usage
```
/graphrag-builder ingest --corpus-path /path/to/documents --entity-types person,company,product,concept
/graphrag-builder query "What companies does [Person] work for?"
/graphrag-builder export --format json --filter "confidence>80"
```

## Configuration
- **Entity Types**: Define relevant entity types for domain
- **Relationship Types**: Specify important relationship types
- **Confidence Threshold**: Minimum confidence for extracted entities
- **Duplicate Detection**: Sensitivity for merging duplicate entities
- **Refresh Frequency**: How often new documents are ingested

## Best Practices
1. **Start Small**: Begin with curated corpus; expand after validation
2. **Entity Standardization**: Create glossary of canonical entity names
3. **Relationship Clarity**: Define what each relationship type means
4. **Manual Review**: Have domain experts review extractions (especially for low confidence)
5. **Iterative Improvement**: Use feedback to refine extraction models
6. **Version Control**: Track graph changes over time
7. **Semantic Enrichment**: Add external data (Wikipedia, Crunchbase) for context
8. **Query Optimization**: Create indexes for frequently used queries
9. **Visualization**: Make graph explorable through UI

## Edge Cases
- **Ambiguous References**: Same name, multiple entities (resolve with context)
- **Temporal Changes**: Entities change over time (track versions)
- **Indirect Relationships**: Sometimes relationships are implied, not explicit
- **Scale**: Millions of entities require specialized databases
