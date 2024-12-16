```javascript
// Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* ... some match criteria */ } },
  {$group: {_id: "$field", sum: {$sum: "$anotherField"}}}, // Incorrect field reference
  {$sort: {sum: -1}}
])
```