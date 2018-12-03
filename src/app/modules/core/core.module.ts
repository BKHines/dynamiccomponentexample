import { NgModule, CompilerFactory, COMPILER_OPTIONS, Compiler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [
    { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
    { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [{useJit: true}] },
    { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] }
  ]
})
export class CoreModule { }
