```ts
{
  imports: [
    //... (other necessary imports)
    ReactiveFormsModule,
    NgDrawFlowComponent,
  ];
  providers: [
    //... (other necessary providers)
    provideNgDrawFlowConfigs({
      infoNode: InfoNodeComponent,
      simpleNode: NodeWithoutConnectorsComponent,
      formNode: FormNodeComponent,
    }),
  ];
}
```
