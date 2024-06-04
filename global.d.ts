// declare module '*.module.css' {
//   interface IClassNames {
//     [className: string]: string;
//   }
//   const classNames: IClassNames;
//   export = classNames;
// }

// declare module '*.module.css';
// declare module '*.module.scss';

declare module '*.module.scss' {
  const content: Record<string, string>;
  export = content;
}
