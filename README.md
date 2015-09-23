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
  subTypeOf: optional AgentType
  name: optional string
  description: optional string

Agent:
  id: required url
  agentType: required AgentType(s)
  name: optional string
  image: optional url

RelationshipType:
  id: required url
  description: optional string
  inverse: optional RelationshipType
  source: optional AgentType
  target: optional AgentType
  context: optional AgentType

Relationship:
  id: required url
  relationshipType: required RelationshipType
  description: optional string
  inverse: optional Relationship
  source: required Agent
  target: required Agent
  context: optional Agent
  start: optional date-time
  end: optional date-time
```

## Examples

All examples open in [JSON-LD Playground](http://json-ld.org/playground)
and use context and example files from master branch of this repository.

* [elf
  Pavlik](http://json-ld.org/playground/#startTab=tab-compacted&json-ld=https%3A%2F%2Frawgit.com%2Fopenvocab%2Fagent%2Fmaster%2Fexamples%2Felf-pavlik.jsonld&context=https%3A%2F%2Frawgit.com%2Fopenvocab%2Fagent%2Fmaster%2Fcontext.jsonld)

## Pictures!

[![UML class diagram](https://rawgit.com/openvocab/agent/master/assets/uml.svg)](https://en.wikipedia.org/wiki/Class_diagram)
