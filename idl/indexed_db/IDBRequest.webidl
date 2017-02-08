interface IDBRequest : EventTarget {
    readonly    attribute any                                        result;
    readonly    attribute DOMError                                   error;
    readonly    attribute (IDBObjectStore or IDBIndex or IDBCursor)? source;
    readonly    attribute IDBTransaction                             transaction;
    readonly    attribute IDBRequestReadyState                       readyState;
                attribute EventHandler                               onsuccess;
                attribute EventHandler                               onerror;
};
