[Constructor(DOMString type, optional ErrorEventInit eventInitDict), Exposed=(Window, Worker)]
interface ErrorEvent : Event {
  readonly attribute DOMString message;
  readonly attribute DOMString filename;
  readonly attribute unsigned long lineno;
  readonly attribute unsigned long colno;
  readonly attribute any error;
};


dictionary ErrorEventInit : EventInit {
  DOMString message = "";
  DOMString filename = "";
  unsigned long lineno = 0;
  unsigned long colno = 0;
  any error = null;
};


[Constructor(DOMString type, PromiseRejectionEventInit eventInitDict), Exposed=(Window,Worker)]
interface PromiseRejectionEvent : Event {
  readonly attribute Promise<any> promise;
  readonly attribute any reason;
};


dictionary PromiseRejectionEventInit : EventInit {
  required Promise<any> promise;
  any reason;
};


[TreatNonObjectAsNull]
callback EventHandlerNonNull = any (Event event);
typedef EventHandlerNonNull? EventHandler;


[TreatNonObjectAsNull]
callback OnErrorEventHandlerNonNull = any ((Event or DOMString) event, optional DOMString source, optional unsigned long lineno, optional unsigned long column, optional any error);
typedef OnErrorEventHandlerNonNull? OnErrorEventHandler;


[TreatNonObjectAsNull]
callback OnBeforeUnloadEventHandlerNonNull = DOMString? (Event event);
typedef OnBeforeUnloadEventHandlerNonNull? OnBeforeUnloadEventHandler;


[NoInterfaceObject]
interface GlobalEventHandlers {
  attribute EventHandler onabort;
  attribute EventHandler onblur;
  attribute EventHandler oncancel;
  attribute EventHandler oncanplay;
  attribute EventHandler oncanplaythrough;
  attribute EventHandler onchange;
  attribute EventHandler onclick;
  attribute EventHandler onclose;
  attribute EventHandler oncontextmenu;
  attribute EventHandler oncuechange;
  attribute EventHandler ondblclick;
  attribute EventHandler ondrag;
  attribute EventHandler ondragend;
  attribute EventHandler ondragenter;
  attribute EventHandler ondragexit;
  attribute EventHandler ondragleave;
  attribute EventHandler ondragover;
  attribute EventHandler ondragstart;
  attribute EventHandler ondrop;
  attribute EventHandler ondurationchange;
  attribute EventHandler onemptied;
  attribute EventHandler onended;
  attribute OnErrorEventHandler onerror;
  attribute EventHandler onfocus;
  attribute EventHandler oninput;
  attribute EventHandler oninvalid;
  attribute EventHandler onkeydown;
  attribute EventHandler onkeypress;
  attribute EventHandler onkeyup;
  attribute EventHandler onload;
  attribute EventHandler onloadeddata;
  attribute EventHandler onloadedmetadata;
  attribute EventHandler onloadstart;
  attribute EventHandler onmousedown;
  [LenientThis] attribute EventHandler onmouseenter;
  [LenientThis] attribute EventHandler onmouseleave;
  attribute EventHandler onmousemove;
  attribute EventHandler onmouseout;
  attribute EventHandler onmouseover;
  attribute EventHandler onmouseup;
  attribute EventHandler onwheel;
  attribute EventHandler onpause;
  attribute EventHandler onplay;
  attribute EventHandler onplaying;
  attribute EventHandler onprogress;
  attribute EventHandler onratechange;
  attribute EventHandler onreset;
  attribute EventHandler onresize;
  attribute EventHandler onscroll;
  attribute EventHandler onseeked;
  attribute EventHandler onseeking;
  attribute EventHandler onselect;
  attribute EventHandler onshow;
  attribute EventHandler onstalled;
  attribute EventHandler onsubmit;
  attribute EventHandler onsuspend;
  attribute EventHandler ontimeupdate;
  attribute EventHandler ontoggle;
  attribute EventHandler onvolumechange;
  attribute EventHandler onwaiting;
};


[NoInterfaceObject]
interface WindowEventHandlers {
  attribute EventHandler onafterprint;
  attribute EventHandler onbeforeprint;
  attribute OnBeforeUnloadEventHandler onbeforeunload;
  attribute EventHandler onhashchange;
  attribute EventHandler onlanguagechange;
  attribute EventHandler onmessage;
  attribute EventHandler onoffline;
  attribute EventHandler ononline;
  attribute EventHandler onpagehide;
  attribute EventHandler onpageshow;
  attribute EventHandler onrejectionhandled;
  attribute EventHandler onpopstate;
  attribute EventHandler onstorage;
  attribute EventHandler onunhandledrejection;
  attribute EventHandler onunload;
};


[NoInterfaceObject]
interface DocumentAndElementEventHandlers {
  attribute EventHandler oncopy;
  attribute EventHandler oncut;
  attribute EventHandler onpaste;
};


[NoInterfaceObject, Exposed=(Window, Worker)]
interface WindowBase64 {
  DOMString btoa(DOMString btoa);
  DOMString atob(DOMString atob);
};
Window implements WindowBase64;
WorkerGlobalScope implements WindowBase64;


[NoInterfaceObject, Exposed=(Window,Worker)]
interface WindowTimers {
  long setTimeout((Function or DOMString) handler, optional long timeout = 0, any... arguments);
  void clearTimeout(optional long handle = 0);
  long setInterval((Function or DOMString) handler, optional long timeout = 0, any... arguments);
  void clearInterval(optional long handle = 0);
};
Window implements WindowTimers;
WorkerGlobalScope implements WindowTimers;


[NoInterfaceObject]
interface WindowModal {
  readonly attribute any dialogArguments;
  attribute any returnValue;
};


interface Navigator {
  // objects implementing this interface also implement the interfaces given below
};
Navigator implements NavigatorID;
Navigator implements NavigatorLanguage;
Navigator implements NavigatorOnLine;
Navigator implements NavigatorContentUtils;
Navigator implements NavigatorCookies;
Navigator implements NavigatorPlugins;


[NoInterfaceObject, Exposed=(Window, Worker)]
interface NavigatorID {
  [Exposed=Window] readonly attribute DOMString appCodeName; // constant "Mozilla"
  readonly attribute DOMString appName; // constant "Netscape"
  readonly attribute DOMString appVersion;
  readonly attribute DOMString platform;
  [Exposed=Window]readonly attribute DOMString product; // constant "Gecko"
  readonly attribute DOMString userAgent;
};


[NoInterfaceObject, Exposed=(Window, Worker)]
interface NavigatorLanguage {
  readonly attribute DOMString? language;
  readonly attribute DOMString[] languages;
};


[NoInterfaceObject]
interface NavigatorContentUtils {
  // content handler registration
  void registerProtocolHandler(DOMString scheme, DOMString url, DOMString title);
  void unregisterProtocolHandler(DOMString scheme, DOMString url);
};


[NoInterfaceObject]
interface NavigatorCookies {
  readonly attribute boolean cookieEnabled;
};


[NoInterfaceObject]
  interface NavigatorPlugins {
  [SameObject] readonly attribute PluginArray plugins;
  [SameObject] readonly attribute MimeTypeArray mimeTypes;
  boolean javaEnabled();
};


interface PluginArray {
  void refresh(optional boolean reload = false);
  readonly attribute unsigned long length;
  getter Plugin? item(unsigned long index);
  getter Plugin? namedItem(DOMString name);
};


interface MimeTypeArray {
  readonly attribute unsigned long length;
  getter MimeType? item(unsigned long index);
  getter MimeType? namedItem(DOMString name);
};


interface Plugin {
  readonly attribute DOMString name;
  readonly attribute DOMString description;
  readonly attribute DOMString filename;
  readonly attribute unsigned long length;
  getter MimeType? item(unsigned long index);
  getter MimeType? namedItem(DOMString name);
};


interface MimeType {
  readonly attribute DOMString type;
  readonly attribute DOMString description;
  readonly attribute DOMString suffixes; // comma-separated
  readonly attribute Plugin enabledPlugin;
};


[Exposed=(Window, Worker)]
interface ImageBitmap {
  readonly attribute unsigned long width;
  readonly attribute unsigned long height;
};

typedef (HTMLImageElement or
        HTMLVideoElement or
        HTMLCanvasElement or
        Blob or
        ImageData or
        CanvasRenderingContext2D or
        ImageBitmap) ImageBitmapSource;


[NoInterfaceObject, Exposed=(Window, Worker)]
interface ImageBitmapFactories {
  Promise<ImageBitmap> createImageBitmap(ImageBitmapSource image);
  Promise<ImageBitmap> createImageBitmap(ImageBitmapSource image, long sx, long sy, long sw, long sh);
};
Window implements ImageBitmapFactories;
WorkerGlobalScope implements ImageBitmapFactories;


