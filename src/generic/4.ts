/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PageComponent {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<PageComponent> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export { PageComponent, Page, Component };