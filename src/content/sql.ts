import type { Category } from "./types";

export const sqlCategory: Category = {
  id: "sql",
  title: "SQL, MongoDB & Data",
  shortTitle: "SQL / DB",
  description:
    "Relational keys/joins, MongoDB indexes and aggregation, ACID, and data modeling.",
  items: [
    {
      id: "what-is-mongodb",
      question: "What is MongoDB?",
      answer:
        "Document database storing BSON/JSON-like documents in collections. Flexible schema, rich queries, secondary indexes, aggregation pipeline, replica sets, and sharding.",
      tags: ["mongo"],
    },
    {
      id: "crud",
      question: "What is CRUD?",
      answer:
        "Create, Read, Update, Delete — basic data operations (insert/find/update/delete in Mongo; INSERT/SELECT/UPDATE/DELETE in SQL).",
      tags: ["basics"],
    },
    {
      id: "indexes-mongo",
      question: "Types of indexes in MongoDB? How to create?",
      answer:
        "Single-field, compound, multikey (arrays), text, geospatial (2d/2dsphere), hashed, wildcard, TTL, unique/partial/sparse. Create: db.coll.createIndex({ field: 1 }) or { a: 1, b: -1 }.",
      tags: ["mongo"],
    },
    {
      id: "aggregate",
      question: "What is aggregate?",
      answer:
        "MongoDB aggregation pipeline: stages ($match, $group, $sort, $project, $lookup, …) transform documents step by step — like SQL GROUP BY + more.",
      tags: ["mongo"],
    },
    {
      id: "lookup",
      question: "What is $lookup?",
      answer:
        "Aggregation stage that joins documents from another collection (left outer join style) into an array field.",
      tags: ["mongo"],
    },
    {
      id: "mongo-search",
      question: "Mongo search query examples?",
      answer:
        "find({ age: { $lt: 27 } }), regex, text index + $text, Atlas Search for full-text. Prefer indexes for equality/range filters.",
      code: `db.users.find({ age: { $lt: 27 } })
db.users.find({ name: /kathir/i })
db.users.find({ $text: { $search: "fullstack" } })`,
      tags: ["mongo"],
    },
    {
      id: "sort-desc-mongo",
      question: "Sort / descending in Mongo?",
      answer:
        "cursor.sort({ field: 1 }) ascending; { field: -1 } descending. In aggregation: { $sort: { field: -1 } }.",
      tags: ["mongo"],
    },
    {
      id: "casting-mongo",
      question: "What is casting in Mongo/Mongoose?",
      answer:
        "Mongoose casts query/update values to the schema types (string→ObjectId, etc.). Invalid casts throw CastError.",
      tags: ["mongo"],
    },
    {
      id: "replica-set",
      question: "What is a replica set?",
      answer:
        "MongoDB high availability: primary accepts writes; secondaries replicate the oplog. Automatic failover elects a new primary. (S3 “replica” is a different concept — cross-region copies.)",
      tags: ["mongo"],
    },
    {
      id: "sharding",
      question: "What is sharding?",
      answer:
        "Horizontal partitioning of data across shards by a shard key. Used when a single replica set can’t hold or serve the data volume/throughput.",
      tags: ["mongo"],
    },
    {
      id: "map-vs-reduce",
      question: "map vs reduce (and MapReduce)?",
      answer:
        "Array map transforms each item; reduce collapses a list to one value. Mongo’s old MapReduce is largely replaced by the aggregation framework.",
      tags: ["javascript", "mongo"],
    },
    {
      id: "primary-unique",
      question: "PRIMARY KEY vs UNIQUE?",
      answer:
        "PRIMARY KEY: unique + not null; one per table; identifies rows. UNIQUE: no duplicates; may allow nulls (SQL dialect dependent); multiple unique constraints allowed.",
      tags: ["sql"],
    },
    {
      id: "unique-vs-primary-id",
      question: "Unique id vs primary key?",
      answer:
        "A primary key is the chosen unique identifier. Other unique columns can exist (alternate keys) but only one PK. Surrogate IDs (auto-increment/UUID) are common PKs.",
      tags: ["sql"],
    },
    {
      id: "candidate-super-key",
      question: "Candidate key vs super key?",
      answer:
        "Super key: any set of columns that uniquely identifies a row (may have extras). Candidate key: minimal super key. One candidate is chosen as primary key.",
      tags: ["sql"],
    },
    {
      id: "inner-right-join",
      question: "INNER JOIN vs RIGHT JOIN?",
      answer:
        "INNER: only matching rows from both tables. RIGHT: all rows from the right table + matches from the left (NULLs if no match). LEFT JOIN is more commonly written than RIGHT.",
      tags: ["sql"],
    },
    {
      id: "find-duplicates",
      question: "How to get duplicates from a table?",
      answer:
        "GROUP BY the columns that should be unique, HAVING COUNT(*) > 1.",
      code: `SELECT email, COUNT(*) AS c
FROM users
GROUP BY email
HAVING COUNT(*) > 1;`,
      tags: ["sql"],
    },
    {
      id: "normalization",
      question: "What is normalization?",
      answer:
        "Organizing relational schemas to reduce redundancy (1NF/2NF/3NF/BCNF). Tradeoff: more joins vs cleaner updates. Denormalize selectively for read performance.",
      tags: ["sql"],
    },
    {
      id: "acid",
      question: "What are ACID properties?",
      answer:
        "Atomicity: all-or-nothing transaction. Consistency: constraints preserved. Isolation: concurrent transactions don’t corrupt each other. Durability: committed data survives crashes.",
      tags: ["sql"],
    },
  ],
};
