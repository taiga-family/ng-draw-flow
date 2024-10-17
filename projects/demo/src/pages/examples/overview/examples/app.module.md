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
      nodes: {
        infoNode: InfoNodeComponent,
        simpleNode: NodeWithoutConnectorsComponent,
        formNode: FormNodeComponent,
      },
    }),
  ];
}
```
