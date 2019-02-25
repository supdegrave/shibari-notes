// ShibariNotes namespace is for server-defined API interfaces
declare namespace ShibariNotes {
    interface Tie {
        _id: string;
        name: string;
        description: string;
        teacher: String;
        style: String;
        learningContext: String;
        tags: string[];
        created: string;
    }
}

// App namespace is for client-only interfaces
declare namespace App {
    interface TiesFilter {
        propertyName: string;
        value: string;
    }
}
