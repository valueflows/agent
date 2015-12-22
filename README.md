# vf:Agent

Vocabulary to describe networks of people and groups.

## Vocabulary

![agentpic](https://raw.githubusercontent.com/valueflows/agent/master/assets/agent.png)

Notes: 
* The Agent core model is fairly stable, but the vocabulary itself is not yet stable, 
and is in research testing with various applications. We are happy to collaborate with any developers 
wanting to start to use the vf:Agent vocabulary. This will give developers a chance to both influence and 
help to stabilize the vocabulary. 
* Many of the terms will in the future be drawn from an existing vocabulary.
* All examples open in [JSON-LD Playground](http://json-ld.org/playground)
and use context and example files from master branch of this repository.

### Agent Type

#### Definition and Notes

We are using a class hierarchy of Agent to represent agent types: Agent, Person, Group. 
We will use existing vocabularies for the top levels, or document equivalence in existing vocabularies. 
We suggest that people add other types of agents as subclasses of this hierarchy if others are useful. 
People could also use other already defined subclasses as desired, for example org:Organization.

#### Structural definition

```
vf:Agent rdf:type owl:Class
vf:Person rdfs:subClassOf vf:Agent
vf:Group rdfs:subClassOf vf:Agent
vf:Agent owl:equivalentClass foaf:Agent
vf:Person owl:equivalentClass foaf:Person
vf:Person owl:equivalentClass schema:Person
vf:Group owl:equivalentClass foaf:Group
```
```
ex:Network rdfs:subClassOf vf:Group
```
```

### Relationship Type

#### Definition and Notes

A relationship type is a generic defined relationship that can be had between 2 Agents (or subclasses of). 
Although it usually is, the relationship of a particular type does not have to be agreed to from both sides, for example "follow". 
A relationship type can be a direct relationship, like "steward" or "like", or more like a role. 
Role types of relationships are often used for a person's role in an organization or group, 
for example "grower" or "harvester" for a food network.

The relationship type is implemented as a rdf:Property. 
There are a number of useful Properties in existing vocabularies that can be used. 
Or people can create their own as needed.  We will supply a handful of types of relationships that can be subPropertied,
and therefore imply some defined behavior. (The specifics are still under discussion, but the following is a start.)

Membership: Membership implies one Agent belonging to or being affiliated with another Agent. 
Any type of Agent can be memberOf a group or other non-person Agent. 
This agent can be memberOf any number of non-person agents, no exclusivity is implied.

#### Properties

These properties are grouped with the rdf:Property that names the relationship type, to complete the relationship type definition.

* label (skos:prefLabel)
* inverseOf (owl:inverseOf)

#### RDF Structural definition

```
vf:memberOf rdf:type rdf:Property
vf:hasMember rdf:type rdf:Property
vf:memberOf owl:inverseOf vf:hasMember
vf:memberOf skos:prefLabel "is member of"
vf:hasMember owl:inverseOf vf:memberOf
vf:hasMember skos:prefLabel "has member"
```
```
ex:affiliateOf rdfs:subPropertyOf vf:memberOf
ex:hasAffiliate rdfs:subPropertyOf vf:hasMember
ex:harvesterFor rdfs:subPropertyOf vf:memberOf
ex:hasHarvester rdfs:subPropertyOf vf:hasMember
```

#### Examples

* [member, affiliate](http://json-ld.org/playground/#startTab=tab-expanded&json-ld=https%3A%2F%2Fraw.githubusercontent.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Fnrp-relationshiptypes.jsonld)

### Agent

#### Definition and Notes

An Agent is an entity that has agency in the social or economic realm.  This could be a person, organization, group, network, etc.

#### Properties

* @id ([JSON-LD](http://www.w3.org/TR/json-ld/) specific way of setting [rdf:subject](http://www.w3.org/TR/rdf-schema/#ch_subject))
* @type ([JSON-LD](http://www.w3.org/TR/json-ld/) specific alias of [rdf:type](http://www.w3.org/TR/rdf-schema/#ch_type))
* url (a URL)
* displayName (skos:prefLabel)
* image (a URL)
* (will probably be others)

#### RDF Structural definition


#### Examples

##### Person

* [elf Pavlik](http://json-ld.org/playground/#startTab=tab-compacted&json-ld=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Felf-pavlik.jsonld&context=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Felf-pavlik.jsonld)
* [Mikey Williams](http://json-ld.org/playground/#startTab=tab-compacted&json-ld=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Fmikey.jsonld&context=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Fmikey.jsonld)

##### Group

* [hackers4peace](http://json-ld.org/playground/#startTab=tab-compacted&json-ld=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Fhackers4peace.jsonld&context=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Fhackers4peace.jsonld)
* [Taabir](http://json-ld.org/playground/#startTab=tab-compacted&json-ld=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Ftaabir.jsonld&context=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Ftaabir.jsonld)
* [Enspiral Craftworks](http://json-ld.org/playground/#startTab=tab-compacted&json-ld=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Fcraftworks.jsonld&context=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Fcraftworks.jsonld)


### Relationship

#### Definition and Notes

A Relationship in this vocabulary denotes a relationship between 2 Agents of any type. 
The relationship can be in the context of an Agent that would not be a Person. 
For example, Jane is a mentor of John in the context of the group Enspiral.

#### Properties

* subject (reference to an agent)
* relationship (reference to the relationship type)
* object (reference to an agent)
* context (reference to an agent, optional)

Commonly used, recommended or defined by this vocabulary. Everyone can use any other properties from any other vocab unless they explicitly restrict their use.

#### RDF Structural definition



#### Examples
* [Bob and Lynn, with relationships to Sensorica and Mikorizal](http://json-ld.org/playground/#startTab=tab-compacted&json-ld=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Fbobandlynn.jsonld&context=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Fbobandlynn.jsonld)
