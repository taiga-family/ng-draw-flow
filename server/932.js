"use strict";exports.id=932,exports.ids=[932],exports.modules={17932:module=>{module.exports="```ts\n@Directive()\nexport abstract class DrawFlowBaseNode {\n  @ViewChildren(DfInputComponent)\n  public inputs!: QueryList<DfInputComponent>;\n\n  @ViewChildren(DfOutputComponent)\n  public outputs!: QueryList<DfOutputComponent>;\n\n  @Input()\n  public nodeId = '';\n\n  @Input()\n  public model!: Record<string, any> & {type: string};\n\n  @Input()\n  public startNode? = false;\n\n  @Input()\n  public endNode? = false;\n\n  @HostBinding('class.df-selected')\n  public selected = false;\n}\n```\n"}};