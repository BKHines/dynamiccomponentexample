import { Component, OnInit, Compiler, NgModule, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ComponentcComponent } from '../componentc/componentc.component';

@Component({
  selector: 'app-componenta',
  templateUrl: './componenta.component.html',
  styleUrls: ['./componenta.component.css']
})
export class ComponentaComponent implements OnInit {
  propertya: boolean;

  private componentRef: ComponentRef<any>;
  @ViewChild('dynamiccontainer', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private compiler: Compiler) { }

  ngOnInit() {
    this.propertya = false;
    this.loadDynamicContent();
  }

  togglePropertyA() {
    this.propertya = !this.propertya;
    this.componentRef.changeDetectorRef.detectChanges();
  }

  loadDynamicContent() {
    this.compiler.clearCache();
    const component = Component({
        template: `<app-componentc [propertya]='propertya'></app-componentc>`
    })(class { });

    const module = NgModule({
        imports: [
            BrowserModule,
            CommonModule,
        ],
        declarations: [
          component,
          ComponentcComponent
        ],
    })(class { });

    this.compiler.compileModuleAndAllComponentsAsync(module)
        .then((factories) => {
            const componentFactory = factories.componentFactories[0];
            this.componentRef = this.container.createComponent(componentFactory);
            this.componentRef.instance.propertya = this.propertya;
        });
  }
}
