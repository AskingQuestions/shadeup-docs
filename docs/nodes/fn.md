---
title: Custom material expression in UE5 | Nodes | Shadeup
---

<script>
	import GetCode from "@/get-code.svelte";
</script>

![Material graph node](img/nodes/nodes-fn.jpg)

![Unreal material expression](img/nodes/nodes-fn-shot.png)

<div style="display: none;">

#### Custom material expression

</div>

# Custom material expression in UE5

Simple material expression with an input and an output.

<GetCode path={["[MATERIAL] Custom Material Nodes", "Base Function"]} target="MaterialNodeOutput_fn" />

## Usage

1. Generate the template: `shadeup` -> `[MATERIAL] Custom Material Nodes` -> `Base Function`
2. Rebuild your project
3. Add the node in a material graph

## Sample snippet

```cpp
int32 UMaterialExpression${NAME}::Compile( FMaterialCompiler* Compiler, int32 OutputIndex)
{
	int32 Result=INDEX_NONE;

	// Check if the input is hooked up, Input is a member we defined in the header for this material expresion.
	// Note: You can define more than one input.

	if( !Input.GetTracedInput().Expression )
	{
		// an input expression must exist
		Result = Compiler->Errorf( TEXT("Missing ${NAME} input") );
	}
	else
	{
		// We get references to inputs/expressions in the form of an int32.
		// These can be passed around and operated on using the FMaterialCompiler::* functions.
		// A list of these functions can be found here: https://docs.unrealengine.com/5.0/en-US/API/Runtime/Engine/FMaterialCompiler/

		// First we store a reference to the input expression.
		int32 InputValue = Input.Compile(Compiler);

		// Then cast to a float3 to ensure the input is a vector.
		int32 InputVector = Compiler->ForceCast(InputValue, MCT_Float3);

		// Then get the length^2 of the vector.
		int32 DotResult = Compiler->Dot(InputVector, InputVector);

		// Then sqrt the result.
		int32 RootResult = Compiler->SquareRoot(DotResult);

		// Finally, we return the result.
		Result = RootResult;
	}

	return Result;
}
```
