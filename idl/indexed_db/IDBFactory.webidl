interface IDBFactory {
    IDBOpenDBRequest open (DOMString name, [EnforceRange] optional unsigned long long version);
    IDBOpenDBRequest deleteDatabase (DOMString name);
    short            cmp (any first, any second);
};
