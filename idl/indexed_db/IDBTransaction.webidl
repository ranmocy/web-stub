interface IDBTransaction : EventTarget {
    readonly        attribute IDBTransactionMode mode;
    readonly        attribute IDBDatabase        db;
    readonly        attribute DOMError           error;
    IDBObjectStore  objectStore (DOMString name);
    void            abort ();
                    attribute EventHandler       onabort;
                    attribute EventHandler       oncomplete;
                    attribute EventHandler       onerror;
};
