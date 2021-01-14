// ServerOptions defines the server serve parameters
class ServerOptions {
    address : string;
    network : string;

    pluginNames : any[];
}

interface ServerOption {
    (s : ServerOptions) : ServerOption;
}


