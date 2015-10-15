# Agent -> Group member

## definition

- domain: Agent (its instance acts as subject of a Statement)
- range: Group (its instance acts as object of a Statement)

## examples

> from [@fosterlynn's comment](https://github.com/valueflows/valueflows/issues/63#issuecomment-148077747):
>
> Another example: Sensorica used to call members "member". They changed it to "affiliate". It is certainly what most people would consider membership, but to them it is important to create the network level vocabulary that expresses the nuances they want to express. So "affiliate" is slightly more distant than "member", implies something subtle around P2P concepts to them. So I want to say to them, discuss it among yourselves, and go for it!

```json
{
  "@context": {
    "owl": "http://www.w3.org/2002/07/owl#",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "rdfs:label: { "@container": "@language" },
    "RelationshipType: "rdf:Property"
  },
  "@id": "http://webfaction.com/accounting/agent-relationship-type/affiliate",
  "@type": "RelationshipType",
  "rdfs:label": {
    "en": "is affiliate of"
  },
  "owl:inverseOf": {
      "rdfs:label": {
          "en": "has affiliate"
      }
  }
}
```
