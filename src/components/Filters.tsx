
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export const Filters = () => {
  const [priceRange, setPriceRange] = useState([0]);

  const vendors = ["Vendor A", "Vendor B", "Vendor C"];
  const locations = [
    "KL",
    "Putra Heights",
    "Subang",
    "Damansara",
    "Putrajaya",
    "Selangor",
    "Shah Alam",
  ];
  const colors = [
    "White",
    "Ivory",
    "Champagne",
    "Blush Pink",
    "Silver",
    "Gold",
    "Black",
  ];
  const themes = ["Malay", "Western", "Indian", "Chinese"];
  const sizes = ["S", "M", "L", "XL", "2XL", "3XL", "4XL"];

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm border border-baju-input-border">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Select>
          <SelectTrigger className="border-baju-input-border">
            <SelectValue placeholder="Select Vendor" />
          </SelectTrigger>
          <SelectContent>
            {vendors.map((vendor) => (
              <SelectItem key={vendor} value={vendor.toLowerCase()}>
                {vendor}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="border-baju-input-border">
            <SelectValue placeholder="Select Location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((location) => (
              <SelectItem key={location} value={location.toLowerCase()}>
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="border-baju-input-border">
            <SelectValue placeholder="Select Color" />
          </SelectTrigger>
          <SelectContent>
            {colors.map((color) => (
              <SelectItem key={color} value={color.toLowerCase()}>
                {color}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="border-baju-input-border">
            <SelectValue placeholder="Select Theme" />
          </SelectTrigger>
          <SelectContent>
            {themes.map((theme) => (
              <SelectItem key={theme} value={theme.toLowerCase()}>
                {theme}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-baju-subtext">
          Price Range: RM{priceRange[0]} - RM5000
        </label>
        <Slider
          defaultValue={[0]}
          max={5000}
          step={100}
          value={priceRange}
          onValueChange={setPriceRange}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-baju-subtext">Sizes:</label>
        <div className="flex flex-wrap gap-4">
          {sizes.map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <Checkbox id={size} />
              <label
                htmlFor={size}
                className="text-sm font-medium text-baju-text cursor-pointer"
              >
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
