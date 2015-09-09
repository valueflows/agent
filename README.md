# Agent vocab

Vocabulary to describe fractal networks of people and groups.

- [Agent](./vocab/Agent.js)
- [AgentType](./vocab/AgentType.js)
- [RelationshipType](./vocab/RelationshipType.js)
- [Relationship](./vocab/Relationship.js)

## Abstract

```yml
AgentType:
  id: required url
  name: optional string
  description: optional string

Agent:
  id: required url
  type: required AgentType
  name: optional string
  image: optional url

RelationshipType:
  id: required url
  description: optional string
  reverse: optional RelationshipType
  source: required AgentType
  target: required AgentType
  context: optional AgentType

Relationship:
  id: required url
  type: required RelationshipType
  description: optional string
  reverse: optional Relationship
  source: required Agent
  target: required Agent
  context: optional Agent
```

## Pictures!

[![UML class diagram](https://rawgit.com/openvocab/agent/master/assets/uml.svg)](https://en.wikipedia.org/wiki/Class_diagram)
