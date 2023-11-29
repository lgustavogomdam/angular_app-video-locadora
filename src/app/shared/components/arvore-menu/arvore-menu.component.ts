import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';

interface MenuNode {
  name: string;
  link?: string;
  icon?: string;
  children?: MenuNode[];
}

const arvore_menu: MenuNode[] = [
  {
    name: 'Ator',
    children: [
      {
        name: 'Listar',
        link: '/ator',
        icon: "list"
      },
      {
        name: 'Cadastrar',
        link: '/ator/cadastrar',
        icon: 'add'
      }
    ]
  },
  {
    name: 'Diretor',
    children: [
      {
        name: 'Listar',
        link: '/diretor',
        icon: "list"
      },
      {
        name: 'Cadastrar',
        link: '/diretor/cadastrar',
        icon: 'add'
      }
    ]
  },
  {
    name: 'Classe',
    children: [
      {
        name: 'Listar',
        link: '/classe',
        icon: "list"
      },
      {
        name: 'Cadastrar',
        link: '/classe/cadastrar',
        icon: 'add'
      }
    ]
  },
  {
    name: 'Item',
    children: [
      {
        name: 'Listar',
        link: '/item',
        icon: "list"
      },
      {
        name: 'Cadastrar',
        link: '/item/cadastrar',
        icon: 'add'
      }
    ]
  },
  {
    name: 'Titulo',
    children: [
      {
        name: 'Listar',
        link: '/titulo',
        icon: "list"
      },
      {
        name: 'Cadastrar',
        link: '/titulo/cadastrar',
        icon: 'add'
      }
    ]
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  sheet: MenuNode;
  level: number;
}

@Component({
  selector: 'app-arvore-menu',
  standalone: false,
  templateUrl: './arvore-menu.component.html',
  styleUrl: './arvore-menu.component.scss'
})
export class ArvoreMenuComponent {

  private _transformer = (node: MenuNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      sheet: node,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = arvore_menu;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
