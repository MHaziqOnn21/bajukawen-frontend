
import { Slider } from "./ui/slider"
import { Checkbox } from "./ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

const SIZES = ["S", "M", "L", "XL", "2XL", "3XL", "4XL"];
const LOCATIONS = ["KL", "Putra Heights", "Subang", "Damansara", "Putrajaya", "Selangor", "Shah Alam"];
const THEMES = ["Malay", "Western", "Indian", "Chinese"];
const COLORS = ["White", "Ivory", "Pink", "Red", "Blue", "Green", "Gold", "Silver", "Black"];

export const FiltersPanel = () => {
  return (
    <div className="space-y-6 p-4 bg-white rounded-lg border border-baju-input-border">
      <div className="space-y-4">
        <div className="text-baju-heading font-medium">Vendors</div>
        <Select>
          <SelectTrigger className="w-full border-baju-input-border">
            <SelectValue placeholder="Select vendor" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="vendor-a">Vendor A</SelectItem>
            <SelectItem value="vendor-b">Vendor B</SelectItem>
            <SelectItem value="vendor-c">Vendor C</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <div className="text-baju-heading font-medium">Location</div>
        <Select>
          <SelectTrigger className="w-full border-baju-input-border">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            {LOCATIONS.map((location) => (
              <SelectItem key={location} value={location.toLowerCase()}>
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <div className="text-baju-heading font-medium">Theme</div>
        <Select>
          <SelectTrigger className="w-full border-baju-input-border">
            <SelectValue placeholder="Select theme" />
          </SelectTrigger>
          <SelectContent>
            {THEMES.map((theme) => (
              <SelectItem key={theme} value={theme.toLowerCase()}>
                {theme}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <div className="text-baju-heading font-medium">Color</div>
        <Select>
          <SelectTrigger className="w-full border-baju-input-border">
            <SelectValue placeholder="Select color" />
          </SelectTrigger>
          <SelectContent>
            {COLORS.map((color) => (
              <SelectItem key={color} value={color.toLowerCase()}>
                {color}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <div className="text-baju-heading font-medium">Price Range (RM)</div>
        <Slider 
          defaultValue={[0]} 
          max={5000} 
          step={100}
          className="w-full"
        />
        <div className="text-sm text-baju-subtext">
          RM0 - RM5000
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-baju-heading font-medium">Sizes</div>
        <div className="grid grid-cols-4 gap-4">
          {SIZES.map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <Checkbox id={`size-${size}`} />
              <label
                htmlFor={`size-${size}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
