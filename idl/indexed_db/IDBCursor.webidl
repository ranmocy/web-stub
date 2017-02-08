interface IDBCursor {
    readonly    attribute (IDBObjectStore or IDBIndex) source;
    readonly    attribute IDBCursorDirection           direction;
    readonly    attribute any                          key;
    readonly    attribute any                          primaryKey;
    IDBRequest update (any value);
    void       advance ([EnforceRange] unsigned long count);
    void       continue (optional any key);
    IDBRequest delete ();
};
