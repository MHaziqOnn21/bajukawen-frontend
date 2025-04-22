
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
const VENDORS = ["Vendor A", "Vendor B", "Vendor C"];

export const FiltersPanel = () => {
  return (
    <div className="space-y-6 p-6 bg-white rounded-lg border border-baju-input-border">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-baju-heading mb-4">Filters</h3>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-baju-text mb-1.5 block">Vendor</label>
            <Select>
              <SelectTrigger className="w-full border-baju-input-border">
                <SelectValue placeholder="Select vendor" />
              </SelectTrigger>
              <SelectContent>
                {VENDORS.map((vendor) => (
                  <SelectItem key={vendor} value={vendor.toLowerCase()}>
                    {vendor}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-baju-text mb-1.5 block">Location</label>
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

          <div>
            <label className="text-sm font-medium text-baju-text mb-1.5 block">Theme</label>
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

          <div>
            <label className="text-sm font-medium text-baju-text mb-1.5 block">Color</label>
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

          <div className="space-y-2">
            <label className="text-sm font-medium text-baju-text block">Price Range (RM)</label>
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

          <div className="space-y-2">
            <label className="text-sm font-medium text-baju-text block">Sizes</label>
            <div className="grid grid-cols-4 gap-4">
              {SIZES.map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox id={`size-${size}`} />
                  <label
                    htmlFor={`size-${size}`}
                    className="text-sm font-medium text-baju-text"
                  >
                    {size}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
