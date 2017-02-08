interface IDBDatabase : EventTarget {
    readonly        attribute DOMString          name;
    readonly        attribute unsigned long long version;
    readonly        attribute DOMStringList      objectStoreNames;
    IDBObjectStore  createObjectStore (DOMString name, optional IDBObjectStoreParameters optionalParameters);
    void            deleteObjectStore (DOMString name);
    IDBTransaction  transaction ((DOMString or sequence<DOMString>) storeNames, optional IDBTransactionMode mode = "readonly");
    void            close ();
                    attribute EventHandler       onabort;
                    attribute EventHandler       onerror;
                    attribute EventHandler       onversionchange;
};
