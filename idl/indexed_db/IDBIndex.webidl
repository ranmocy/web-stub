interface IDBIndex {
    readonly    attribute DOMString      name;
    readonly    attribute IDBObjectStore objectStore;
    readonly    attribute any            keyPath;
    readonly    attribute boolean        multiEntry;
    readonly    attribute boolean        unique;
    IDBRequest openCursor (optional any range, optional IDBCursorDirection direction = "next");
    IDBRequest openKeyCursor (optional any range, optional IDBCursorDirection direction = "next");
    IDBRequest get (any key);
    IDBRequest getKey (any key);
    IDBRequest count (optional any key);
};
