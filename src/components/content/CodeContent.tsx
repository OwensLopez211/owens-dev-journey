// codeContent.tsx
export interface CodeLine {
    indent: number;
    content: Array<{
      text: string;
      color: string;
    }>;
  }
  
  export const codeContent: CodeLine[] = [
    { 
      indent: 0, 
      content: [
        { text: 'class ', color: 'text-purple-400' }, 
        { text: 'Developer', color: 'text-yellow-300' }, 
        { text: ':', color: 'text-white' }
      ] 
    },
    { 
      indent: 1, 
      content: [
        { text: 'def ', color: 'text-purple-400' }, 
        { text: '__init__', color: 'text-blue-400' }, 
        { text: '(', color: 'text-white' }, 
        { text: 'self', color: 'text-orange-300' }, 
        { text: '):', color: 'text-white' }
      ] 
    },
    { 
      indent: 2, 
      content: [
        { text: 'self', color: 'text-orange-300' }, 
        { text: '.', color: 'text-white' }, 
        { text: 'name', color: 'text-blue-300' }, 
        { text: ' = ', color: 'text-white' }, 
        { text: '"Owens López"', color: 'text-green-400' }
      ] 
    },
    { 
      indent: 2, 
      content: [
        { text: 'self', color: 'text-orange-300' }, 
        { text: '.', color: 'text-white' }, 
        { text: 'role', color: 'text-blue-300' }, 
        { text: ' = ', color: 'text-white' }, 
        { text: '"Full Stack Developer"', color: 'text-green-400' }
      ] 
    },
    { 
      indent: 2, 
      content: [
        { text: 'self', color: 'text-orange-300' }, 
        { text: '.', color: 'text-white' }, 
        { text: 'frontend_stack', color: 'text-blue-300' }, 
        { text: ' = {', color: 'text-white' }
      ] 
    },
    { 
      indent: 3, 
      content: [
        { text: '"main"', color: 'text-green-400' }, 
        { text: ': [', color: 'text-white' }, 
        { text: '"React"', color: 'text-green-400' }, 
        { text: ', ', color: 'text-white' }, 
        { text: '"Next.js"', color: 'text-green-400' }, 
        { text: '],', color: 'text-white' }
      ] 
    },
    { 
      indent: 3, 
      content: [
        { text: '"styling"', color: 'text-green-400' }, 
        { text: ': [', color: 'text-white' }, 
        { text: '"TailwindCSS"', color: 'text-green-400' }, 
        { text: ', ', color: 'text-white' }, 
        { text: '"Bootstrap"', color: 'text-green-400' }, 
        { text: '],', color: 'text-white' }
      ] 
    },
    { 
      indent: 3, 
      content: [
        { text: '"languages"', color: 'text-green-400' }, 
        { text: ': [', color: 'text-white' }, 
        { text: '"TypeScript"', color: 'text-green-400' }, 
        { text: ', ', color: 'text-white' }, 
        { text: '"JavaScript"', color: 'text-green-400' }, 
        { text: ']', color: 'text-white' }
      ] 
    },
    { 
      indent: 2, 
      content: [
        { text: '}', color: 'text-white' }
      ] 
    },
    { 
      indent: 2, 
      content: [
        { text: 'self', color: 'text-orange-300' }, 
        { text: '.', color: 'text-white' }, 
        { text: 'backend_stack', color: 'text-blue-300' }, 
        { text: ' = {', color: 'text-white' }
      ] 
    },
    { 
      indent: 3, 
      content: [
        { text: '"languages"', color: 'text-green-400' }, 
        { text: ': [', color: 'text-white' }, 
        { text: '"Python"', color: 'text-green-400' }, 
        { text: ', ', color: 'text-white' }, 
        { text: '"JavaScript"', color: 'text-green-400' }, 
        { text: '],', color: 'text-white' },
        { text: '"PHP"', color: 'text-green-400' }, 
        { text: '],', color: 'text-white' }
      ] 
    },
    { 
      indent: 3, 
      content: [
        { text: '"frameworks"', color: 'text-green-400' }, 
        { text: ': [', color: 'text-white' }, 
        { text: '"Django"', color: 'text-green-400' }, 
        { text: ', ', color: 'text-white' }, 
        { text: '"Laravel PHP"', color: 'text-green-400' }, 
        { text: '],', color: 'text-white' }
      ] 
    },
    { 
      indent: 3, 
      content: [
        { text: '"databases"', color: 'text-green-400' }, 
        { text: ': [', color: 'text-white' }, 
        { text: '"PostgreSQL"', color: 'text-green-400' }, 
        { text: ', ', color: 'text-white' }, 
        { text: '"MongoDB"', color: 'text-green-400' }, 
        { text: ']', color: 'text-white' }
      ] 
    },
    { 
      indent: 2, 
      content: [
        { text: '}', color: 'text-white' }
      ] 
    },
    { 
      indent: 2, 
      content: [
        { text: 'self', color: 'text-orange-300' }, 
        { text: '.', color: 'text-white' }, 
        { text: 'tools', color: 'text-blue-300' }, 
        { text: ' = [', color: 'text-white' }, 
        { text: '"Git"', color: 'text-green-400' }, 
        { text: ', ', color: 'text-white' }, 
        { text: '"Docker"', color: 'text-green-400' }, 
        { text: ', ', color: 'text-white' }, 
        { text: '"AWS"', color: 'text-green-400' }, 
        { text: ', ', color: 'text-white' },
        { text: '"VPS"', color: 'text-green-400' }, 
        { text: ']', color: 'text-white' }
      ] 
    },
    { 
      indent: 1, 
      content: [
        { text: 'def ', color: 'text-purple-400' }, 
        { text: 'get_passion', color: 'text-blue-400' }, 
        { text: '(', color: 'text-white' }, 
        { text: 'self', color: 'text-orange-300' }, 
        { text: '):', color: 'text-white' }
      ] 
    },
    { 
      indent: 2, 
      content: [
        { text: 'return ', color: 'text-purple-400' }, 
        { text: '"Convertir ideas en soluciones digitales"', color: 'text-green-400' }
      ] 
    },
    { 
      indent: 1, 
      content: [
        { text: 'def ', color: 'text-purple-400' }, 
        { text: 'get_focus', color: 'text-blue-400' }, 
        { text: '(', color: 'text-white' }, 
        { text: 'self', color: 'text-orange-300' }, 
        { text: '):', color: 'text-white' }
      ] 
    },
    { 
      indent: 2, 
      content: [
        { text: 'return ', color: 'text-purple-400' }, 
        { text: '"Aplicaciones web robustas y escalables"', color: 'text-green-400' }
      ] 
    }
  ];