const mock = () => {
    // Mock our local storage
     let storage = {};
     return {
       getItem: (key:any) => key in storage ? storage[ key ] : null,
       setItem: (key: any, value: any) => storage[ key ] = value || '',
       removeItem: (key: any) => delete storage[ key ],
       clear: () => storage = {},
     };
   };

Object.defineProperty(window, 'localStorage', { value: mock() });
Object.defineProperty(window, 'sessionStorage', { value: mock() });
