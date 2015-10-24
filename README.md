# vf:Agent

Vocabulary to describe networks of people and groups.

## Vocabulary

![agentpic](https://raw.githubusercontent.com/valueflows/agent/master/assets/agent.png)

Notes: 
* This vocabulary is very much in process, as is this documentation. 
* Many of the terms will in the future be drawn from an existing vocabulary.
* All examples open in [JSON-LD Playground](http://json-ld.org/playground)
and use context and example files from master branch of this repository.

### Agent Type

#### Notes

We are using a class hierarchy of Agent Types: Agent, Person, Organization, Group.  We will use existing vocabularies for the top levels.  We suggest that people add other types of agents as subclasses of this hierarchy if others are useful.

#### Examples

* [Network](http://json-ld.org/playground/#startTab=tab-expanded&json-ld=%7B%22%40context%22%3A%7B%22Agent%22%3A%22vf%3AAgent%22%2C%22Group%22%3A%22vf%3AGroup%22%2C%22Person%22%3A%22vf%3APerson%22%2C%22label%22%3A%22skos%3AprefLabel%22%2C%22labelMap%22%3A%7B%22%40container%22%3A%22%40language%22%2C%22%40id%22%3A%22skos%3AprefLabel%22%7D%2C%22nrp%22%3A%22http%3A%2F%2Fnrp.webfactional.com%2Faccounting%2F%22%2C%22owl%22%3A%22http%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%22%2C%22rdf%22%3A%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%2C%22rdfs%22%3A%22http%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%22%2C%22skos%22%3A%22http%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%22%2C%22vf%22%3A%22https%3A%2F%2Fw3id.org%2Fvalueflows%2F%22%7D%2C%22%40graph%22%3A%5B%7B%22%40id%22%3A%22nrp%3Aagent-type-lod%2FNetwork%22%2C%22%40type%22%3A%22owl%3AClass%22%2C%22labelMap%22%3A%7B%22en%22%3A%22Network%22%7D%2C%22rdfs%3AsubClassOf%22%3A%7B%22%40id%22%3A%22vf%3AGroup%22%7D%7D%5D%7D&context=%7B%7D)

### Relationship Type

#### Notes

A Relationship Type is a generic defined relationship that can be had between 2 Agents (or subclasses of). Although it usually is, the relationship does not have to be agreed to from both sides, for example "follow".   A Relationship Type can be a direct relationship, like "steward" or "like", or more like a role.  Role type Relationship Types are often used for a person's role in an organization or group, for example "grower" or "harvester" for a food network.

The Relationship Type is implemented as a rdf:Property.  There are a number of useful properties in existing vocabularies that can be used.  Or people can create their own as needed.

#### Properties

Comonly used, recommended or defined by this vocabulary. Everyone can use any other properties from any other vocab unless they explicitly restrict their use.

These properties are grouped with the rdf:Property that names the relationship type.

* label (rdfs:label)
* inverseOf (owl:inverseOf)

#### Examples

* [member, affiliate](http://json-ld.org/playground/#startTab=tab-expanded&json-ld=%7B%22%40context%22%3A%7B%22inverseOf%22%3A%22owl%3AinverseOf%22%2C%22label%22%3A%22skos%3AprefLabel%22%2C%22labelMap%22%3A%7B%22%40container%22%3A%22%40language%22%2C%22%40id%22%3A%22skos%3AprefLabel%22%7D%2C%22nrp%22%3A%22http%3A%2F%2Fnrp.webfactional.com%2Faccounting%2F%22%2C%22owl%22%3A%22http%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%22%2C%22rdf%22%3A%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%2C%22rdfs%22%3A%22http%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%22%2C%22skos%22%3A%22http%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%22%2C%22vf%22%3A%22https%3A%2F%2Fw3id.org%2Fvalueflows%2F%22%7D%2C%22%40graph%22%3A%5B%7B%22%40id%22%3A%22nrp%3Aagent-relationship-type-lod%2FisAffiliateOf%22%2C%22%40type%22%3A%22rdf%3AProperty%22%2C%22inverseOf%22%3A%7B%22%40id%22%3A%22nrp%3Aagent-relationship-type-lod%2FhasAffiliate%22%7D%2C%22labelMap%22%3A%7B%22en%22%3A%22is%20affiliate%20of%22%7D%7D%2C%7B%22%40id%22%3A%22nrp%3Aagent-relationship-type-lod%2FhasAffiliate%22%2C%22%40type%22%3A%22rdf%3AProperty%22%2C%22inverseOf%22%3A%7B%22%40id%22%3A%22nrp%3Aagent-relationship-type-lod%2FisAffiliateOf%22%7D%2C%22labelMap%22%3A%7B%22en%22%3A%22has%20affiliate%22%7D%7D%2C%7B%22%40id%22%3A%22nrp%3Aagent-relationship-type-lod%2FhasMember%22%2C%22%40type%22%3A%22rdf%3AProperty%22%2C%22inverseOf%22%3A%7B%22%40id%22%3A%22nrp%3Aagent-relationship-type-lod%2FisMemberOf%22%7D%2C%22labelMap%22%3A%7B%22en%22%3A%22has%20member%22%7D%7D%2C%7B%22%40id%22%3A%22nrp%3Aagent-relationship-type-lod%2FisMemberOf%22%2C%22%40type%22%3A%22rdf%3AProperty%22%2C%22inverseOf%22%3A%7B%22%40id%22%3A%22nrp%3Aagent-relationship-type-lod%2FhasMember%22%7D%2C%22labelMap%22%3A%7B%22en%22%3A%22is%20member%20of%22%7D%7D%5D%7D&context=%7B%7D)

### Agent

#### Notes

An Agent is an entity that has agency in the economic realm.  This could be a person, organization, group, network, etc.  

#### Properties

* @id ([JSON-LD](http://www.w3.org/TR/json-ld/) specific way of setting [rdf:subject](http://www.w3.org/TR/rdf-schema/#ch_subject))
* @type ([JSON-LD](http://www.w3.org/TR/json-ld/) specific alias of [rdf:type](http://www.w3.org/TR/rdf-schema/#ch_type))
* url 
* displayName / displayNameMap
* image
* (will be others)

#### Examples

##### Person

* [elf Pavlik](http://json-ld.org/playground/#startTab=tab-compacted&json-ld=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Felf-pavlik.jsonld&context=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Felf-pavlik.jsonld)
* [Mikey Williams](http://json-ld.org/playground/#startTab=tab-compacted&json-ld=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Fmikey.jsonld&context=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Fmikey.jsonld)
* [Bob Haugen](http://json-ld.org/playground/#startTab=tab-expanded&json-ld=%7B%22%40context%22%3A%7B%22Agent%22%3A%22vf%3AAgent%22%2C%22Group%22%3A%22vf%3AGroup%22%2C%22Person%22%3A%22vf%3APerson%22%2C%22image%22%3A%7B%22%40id%22%3A%22vf%3Aimage%22%2C%22%40type%22%3A%22%40id%22%7D%2C%22label%22%3A%22skos%3AprefLabel%22%2C%22labelMap%22%3A%7B%22%40container%22%3A%22%40language%22%2C%22%40id%22%3A%22skos%3AprefLabel%22%7D%2C%22nrp%22%3A%22http%3A%2F%2Fnrp.webfactional.com%2Faccounting%2F%22%2C%22owl%22%3A%22http%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%22%2C%22rdf%22%3A%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%2C%22rdfs%22%3A%22http%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%22%2C%22skos%22%3A%22http%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%22%2C%22vf%22%3A%22https%3A%2F%2Fw3id.org%2Fvalueflows%2F%22%7D%2C%22%40id%22%3A%22nrp%3Aagent-lod%2F1%22%2C%22%40type%22%3A%22Person%22%2C%22vf%3Alabel%22%3A%7B%22%40language%22%3A%22en%22%2C%22%40value%22%3A%22Bob%20Haugen%22%7D%2C%22nrp%3Aagent-relationship-type-lod%2FisAffiliateOf%22%3A%7B%22%40id%22%3A%22nrp%3Aagent-relationship-lod%2F3%2F%22%7D%2C%22nrp%3Aagent-relationship-type-lod%2FisMemberOf%22%3A%5B%7B%22%40id%22%3A%22nrp%3Aagent-relationship-lod%2F1%2F%22%7D%2C%7B%22%40id%22%3A%22nrp%3Aagent-relationship-lod%2F6%2F%22%7D%5D%7D&context=%7B%7D)

##### Group

* [hackers4peace](http://json-ld.org/playground/#startTab=tab-compacted&json-ld=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Fhackers4peace.jsonld&context=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Fhackers4peace.jsonld)
* [Taabir](http://json-ld.org/playground/#startTab=tab-compacted&json-ld=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Ftaabir.jsonld&context=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Ftaabir.jsonld)
* [Enspiral Craftworks](http://json-ld.org/playground/#startTab=tab-compacted&json-ld=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Fcraftworks.jsonld&context=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Fcraftworks.jsonld)
* [Mikorizal](http://json-ld.org/playground/#startTab=tab-expanded&json-ld=%7B%22%40context%22%3A%7B%22Agent%22%3A%22vf%3AAgent%22%2C%22Group%22%3A%22vf%3AGroup%22%2C%22Person%22%3A%22vf%3APerson%22%2C%22Relationship%22%3A%22vf%3ARelationship%22%2C%22label%22%3A%22skos%3AprefLabel%22%2C%22labelMap%22%3A%7B%22%40container%22%3A%22%40language%22%2C%22%40id%22%3A%22skos%3AprefLabel%22%7D%2C%22nrp%22%3A%22http%3A%2F%2Fnrp.webfactional.com%2Faccounting%2F%22%2C%22owl%22%3A%22http%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%22%2C%22rdf%22%3A%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%2C%22rdfs%22%3A%22http%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%22%2C%22skos%22%3A%22http%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%22%2C%22vf%22%3A%22https%3A%2F%2Fw3id.org%2Fvalueflows%2F%22%7D%2C%22%40id%22%3A%22nrp%3Aagent-lod%2F7%22%2C%22%40type%22%3A%22nrp%3Aagent-type-lod%2FGroup%22%2C%22vf%3Alabel%22%3A%7B%22%40language%22%3A%22en%22%2C%22%40value%22%3A%22Mikorizal%20Software%22%7D%2C%22nrp%3Aagent-relationship-type-lod%2FhasMember%22%3A%5B%7B%22%40id%22%3A%22nrp%3Aagent-relationship-inv-lod%2F2%2F%22%7D%2C%7B%22%40id%22%3A%22nrp%3Aagent-relationship-inv-lod%2F1%2F%22%7D%5D%7D&context=%7B%7D)

### Relationship

#### Notes

A Relationship in this vocabulary denotes a relationship between 2 Agents of any type.  The relationship can be in the context of an Agent that is a context type agent, which would not be a Person.  For example, Jane is a mentor of John in the context of the group Enspiral.

#### Properties

* subject (reference to an agent)
* relationship (reference to the relationship type)
* object (reference to an agent)
* context (reference to an agent, optional)

#### Examples

* [members, affiliates](http://json-ld.org/playground/#startTab=tab-expanded&json-ld=%7B%22%40context%22%3A%7B%22Agent%22%3A%22vf%3AAgent%22%2C%22Group%22%3A%22vf%3AGroup%22%2C%22Person%22%3A%22vf%3APerson%22%2C%22Relationship%22%3A%22vf%3ARelationship%22%2C%22inverseOf%22%3A%22owl%3AinverseOf%22%2C%22nrp%22%3A%22http%3A%2F%2Fnrp.webfactional.com%2Faccounting%2F%22%2C%22object%22%3A%7B%22%40id%22%3A%22vf%3Aobject%22%2C%22%40type%22%3A%22%40id%22%7D%2C%22owl%22%3A%22http%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%22%2C%22rdf%22%3A%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%2C%22rdfs%22%3A%22http%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%22%2C%22relationship%22%3A%7B%22%40id%22%3A%22vf%3Arelationship%22%2C%22%40type%22%3A%22%40id%22%7D%2C%22skos%22%3A%22http%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%22%2C%22subject%22%3A%7B%22%40id%22%3A%22vf%3Asubject%22%2C%22%40type%22%3A%22%40id%22%7D%2C%22vf%22%3A%22https%3A%2F%2Fw3id.org%2Fvalueflows%2F%22%7D%2C%22%40graph%22%3A%5B%7B%22%40id%22%3A%22nrp%3Aagent-relationship-lod%2F2%2F%22%2C%22%40type%22%3A%22Relationship%22%2C%22object%22%3A%22nrp%3Aagent-lod%2F7%2F%22%2C%22relationship%22%3A%22nrp%3Aagent-relationship-type-lod%2FisMemberOf%22%2C%22subject%22%3A%22nrp%3Aagent-lod%2F6%2F%22%7D%2C%7B%22%40id%22%3A%22nrp%3Aagent-relationship-lod%2F3%2F%22%2C%22%40type%22%3A%22Relationship%22%2C%22object%22%3A%22nrp%3Aagent-lod%2F8%2F%22%2C%22relationship%22%3A%22nrp%3Aagent-relationship-type-lod%2FisAffiliateOf%22%2C%22subject%22%3A%22nrp%3Aagent-lod%2F1%2F%22%7D%2C%7B%22%40id%22%3A%22nrp%3Aagent-relationship-inv-lod%2F3%2F%22%2C%22%40type%22%3A%22Relationship%22%2C%22object%22%3A%22nrp%3Aagent-lod%2F1%2F%22%2C%22relationship%22%3A%22nrp%3Aagent-relationship-type-lod%2FhasAffiliate%22%2C%22subject%22%3A%22nrp%3Aagent-lod%2F8%2F%22%7D%2C%7B%22%40id%22%3A%22nrp%3Aagent-relationship-lod%2F4%2F%22%2C%22%40type%22%3A%22Relationship%22%2C%22object%22%3A%22nrp%3Aagent-lod%2F8%2F%22%2C%22relationship%22%3A%22nrp%3Aagent-relationship-type-lod%2FisAffiliateOf%22%2C%22subject%22%3A%22nrp%3Aagent-lod%2F6%2F%22%7D%2C%7B%22%40id%22%3A%22nrp%3Aagent-relationship-lod%2F1%2F%22%2C%22%40type%22%3A%22Relationship%22%2C%22object%22%3A%22nrp%3Aagent-lod%2F7%2F%22%2C%22relationship%22%3A%22nrp%3Aagent-relationship-type-lod%2FisMemberOf%22%2C%22subject%22%3A%22nrp%3Aagent-lod%2F1%2F%22%7D%2C%7B%22%40id%22%3A%22nrp%3Aagent-relationship-inv-lod%2F1%2F%22%2C%22%40type%22%3A%22Relationship%22%2C%22object%22%3A%22nrp%3Aagent-lod%2F1%2F%22%2C%22relationship%22%3A%22nrp%3Aagent-relationship-type-lod%2FhasMember%22%2C%22subject%22%3A%22nrp%3Aagent-lod%2F7%2F%22%7D%2C%7B%22%40id%22%3A%22nrp%3Aagent-relationship-inv-lod%2F2%2F%22%2C%22%40type%22%3A%22Relationship%22%2C%22object%22%3A%22nrp%3Aagent-lod%2F6%2F%22%2C%22relationship%22%3A%22nrp%3Aagent-relationship-type-lod%2FhasMember%22%2C%22subject%22%3A%22nrp%3Aagent-lod%2F7%2F%22%7D%2C%7B%22%40id%22%3A%22nrp%3Aagent-relationship-inv-lod%2F4%2F%22%2C%22%40type%22%3A%22Relationship%22%2C%22object%22%3A%22nrp%3Aagent-lod%2F6%2F%22%2C%22relationship%22%3A%22nrp%3Aagent-relationship-type-lod%2FhasAffiliate%22%2C%22subject%22%3A%22nrp%3Aagent-lod%2F8%2F%22%7D%5D%7D&context=%7B%7D)
