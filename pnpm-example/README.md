To reproduce bug in typescript, run...

```bash
pnpm install
pnpm run --filter @pnpm-example/pkg-a build
```

That should produce an error like...

![failure](pnpm-failure.png)