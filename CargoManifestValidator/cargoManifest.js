// Original cargo information
const cargo = {
  containerId: 68,
  destination: "Salinas",
  weight: 45.45,
  unit: "kg",
  hazmat: true
};

// Step 1: Convert the weight to kilograms when necessary
let normalizeUnits = (manifest) => {
  // Create a copy to preserve the original manifest
  const newManifest = {...manifest};

  // Check if the current weight unit is pounds
  if (manifest["unit"] === "lb") {
    // Convert pounds to kilograms
    newManifest["weight"] = manifest["weight"] * 0.45;

    // Update the unit to kilograms
    newManifest["unit"] = "kg";
  }

  // Return the normalized manifest
  return newManifest;
};

// Step 2: Validate the cargo information
let validateManifest = (manifest) => {
  // Store validation errors without modifying the original manifest
  const errors = {};

  // Validate the container ID
  if (manifest["containerId"] === undefined) {
    errors["containerId"] = "Missing";
  } else if (
    !Number.isInteger(manifest["containerId"]) ||
    manifest["containerId"] <= 0
  ) {
    errors["containerId"] = "Invalid";
  }

  // Validate the destination
  if (manifest["destination"] === undefined) {
    errors["destination"] = "Missing";
  } else if (
    typeof manifest["destination"] !== "string" ||
    manifest["destination"].trim() === ""
  ) {
    errors["destination"] = "Invalid";
  }

  // Validate the weight
  if (manifest["weight"] === undefined) {
    errors["weight"] = "Missing";
  } else if (
    typeof manifest["weight"] !== "number" ||
    manifest["weight"] <= 0 ||
    Number.isNaN(manifest["weight"])
  ) {
    errors["weight"] = "Invalid";
  }

  // Validate the weight unit
  if (manifest["unit"] === undefined) {
    errors["unit"] = "Missing";
  } else if (
    manifest["unit"] !== "kg" &&
    manifest["unit"] !== "lb"
  ) {
    errors["unit"] = "Invalid";
  }

  // Validate the hazardous material status
  if (manifest["hazmat"] === undefined) {
    errors["hazmat"] = "Missing";
  } else if (typeof manifest["hazmat"] !== "boolean") {
    errors["hazmat"] = "Invalid";
  }

  // Return all detected validation errors
  return errors;
};

// Step 3: Validate and process the cargo manifest
let processManifest = (manifest) => {
  // Check the manifest for missing or invalid information
  const errors = validateManifest(manifest);

  // Proceed only if all required fields are valid
  if (
    errors["containerId"] === undefined &&
    errors["destination"] === undefined &&
    errors["weight"] === undefined &&
    errors["unit"] === undefined &&
    errors["hazmat"] === undefined
  ) {
    // Convert the weight to kilograms if needed
    const normalized = normalizeUnits(manifest);

    // Display the successful validation result
    console.log(`Validation success: ${manifest["containerId"]}`);

    // Display the final weight in kilograms
    console.log(`Total weight: ${normalized["weight"]} kg`);
  } else {
    // Display a validation error if the manifest is invalid
    console.log(`Validation error: ${manifest["containerId"]}`);

    // Display the specific fields that need correction
    console.log(errors);
  }
};

// Execute the manifest processing function
processManifest(cargo);