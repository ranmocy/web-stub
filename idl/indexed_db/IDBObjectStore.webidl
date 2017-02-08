interface IDBObjectStore {
    readonly    attribute DOMString      name;
    readonly    attribute any            keyPath;
    readonly    attribute DOMStringList  indexNames;
    readonly    attribute IDBTransaction transaction;
    readonly    attribute boolean        autoIncrement;
    IDBRequest put (any value, optional any key);
    IDBRequest add (any value, optional any key);
    IDBRequest delete (any key);
    IDBRequest get (any key);
    IDBRequest clear ();
    IDBRequest openCursor (optional any? range, optional IDBCursorDirection direction = "next");
    IDBIndex   createIndex (DOMString name, (DOMString or sequence<DOMString>) keyPath, optional IDBIndexParameters optionalParameters);
    IDBIndex   index (DOMString name);
    void       deleteIndex (DOMString indexName);
    IDBRequest count (optional any key);
};
