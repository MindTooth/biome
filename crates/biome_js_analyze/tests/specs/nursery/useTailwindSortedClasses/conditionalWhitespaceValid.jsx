// should not generate diagnostics
<>
  <div class={`flex p-4${hidden ? " hidden" : ""}`} />
  <div class={`${hidden ? "hidden " : ""}flex p-4`} />
  <div class={`flex${hidden ? " hidden " : " "}p-4`} />
  <div class={`flex p-4${hidden && " hidden"}`} />
</>;
