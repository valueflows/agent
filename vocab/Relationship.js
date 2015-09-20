module.exports = {
  id: 'Relationship',
  prefixes: require('./prefixes'),
  description: 'A relationship between multiple agents.',
  context: 'as:Relationship',
  properties: {
    id: {
      context: '@id',
      description: 'The identifier for the relationship.',
      type: 'string',
      format: 'uri',
      required: true
    },
    relationshipType: {
      context: 'as:relationship',
      description: 'The type of agent relationship.',
      $ref: 'RelationshipType',
      required: true
    },
    description: {
      context: 'schema:description',
      description: "A description of the agents' relations.",
      type: 'string'
    },
    inverse: {
      context: 'owl:inverseOf',
      description: "This relationship's associated reverse relationship, if any.",
      $ref: 'Relationship'
    },
    source: {
      context: 'as:subject',
      description: 'The source agent in the relationship',
      $ref: 'Agent',
      required: true
    },
    target: {
      context: 'as:object',
      description: 'The target agent in the relationship',
      $ref: 'Agent',
      required: true
    },
    context: {
      context: 'as:context',
      description: 'The context agent in the relationship',
      $ref: 'Agent'
    },
    start: {
      context: 'as:startTime',
      description: 'The start time of the relationship.',
      type: 'string',
      format: 'date-time'
    },
    end: {
      context: 'as:endTime',
      description: 'The end time of the relationship.',
      type: 'string',
      format: 'date-time'
    }
  }
}
