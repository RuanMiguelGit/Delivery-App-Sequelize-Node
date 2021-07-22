const types = [
  { columnName: 'id', columnType: 'INT' },
  { columnName: 'userId', columnType: 'INT' },
  { columnName: 'sellerId', columnType: 'INT' },
  { columnName: 'totalPrice', columnType: 'DECIMAL', decimals: 2 },
  { columnName: 'deliveryAddress', columnType: 'VARCHAR' },
  { columnName: 'deliveryNumber', columnType: 'VARCHAR' },
  { columnName: 'salesDate', columnType: 'DATETIME' },
  { columnName: 'status', columnType: 'VARCHAR' }
];

module.exports = types
