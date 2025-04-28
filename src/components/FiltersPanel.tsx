import { useState } from "react";
import { Search } from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Slider } from "./ui/slider";
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const SIZES = ["S", "M", "L", "XL", "2XL", "3XL", "4XL"];
const LOCATIONS = ["KL", "Putra Heights", "Subang", "Damansara", "Putrajaya", "Selangor", "Shah Alam"];
const THEMES = ["Malay", "Western", "Indian", "Chinese"];
const COLORS = ["White", "Ivory", "Pink", "Red", "Blue", "Green", "Gold", "Silver", "Black"];
const VENDORS = ["Vendor A", "Vendor B", "Vendor C"];
const PRODUCT_TYPES = ["Set Match", "Bride", "Groom"];

export const FiltersPanel = () => {
  const [vendorSearch, setVendorSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [showVendorCommand, setShowVendorCommand] = useState(false);
  const [showLocationCommand, setShowLocationCommand] = useState(false);

  const filteredVendors = VENDORS.filter(vendor =>
    vendor.toLowerCase().includes(vendorSearch.toLowerCase())
  );

  const filteredLocations = LOCATIONS.filter(location =>
    location.toLowerCase().includes(locationSearch.toLowerCase())
  );

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg border border-baju-input-border">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-baju-heading mb-4">Filters</h3>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-baju-text mb-1.5 block">Product Type</label>
            <Select>
              <SelectTrigger className="w-full border-baju-input-border">
                <SelectValue placeholder="Select product type" />
              </SelectTrigger>
              <SelectContent>
                {PRODUCT_TYPES.map((type) => (
                  <SelectItem key={type} value={type.toLowerCase()}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-baju-text mb-1.5 block">Vendor</label>
            <div className="relative">
              <button
                className="w-full flex items-center justify-between px-3 py-2 text-sm border rounded-md border-baju-input-border bg-background"
                onClick={() => setShowVendorCommand(true)}
              >
                <span>{vendorSearch || "Search vendor..."}</span>
                <Search className="h-4 w-4" />
              </button>
              <CommandDialog open={showVendorCommand} onOpenChange={setShowVendorCommand}>
                <Command>
                  <CommandInput 
                    placeholder="Search vendors..." 
                    value={vendorSearch}
                    onValueChange={setVendorSearch}
                  />
                  <CommandList>
                    <CommandEmpty>No vendors found.</CommandEmpty>
                    <CommandGroup>
                      {filteredVendors.map((vendor) => (
                        <CommandItem
                          key={vendor}
                          onSelect={() => {
                            setVendorSearch(vendor);
                            setShowVendorCommand(false);
                          }}
                        >
                          {vendor}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </CommandDialog>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-baju-text mb-1.5 block">Location</label>
            <div className="relative">
              <button
                className="w-full flex items-center justify-between px-3 py-2 text-sm border rounded-md border-baju-input-border bg-background"
                onClick={() => setShowLocationCommand(true)}
              >
                <span>{locationSearch || "Search location..."}</span>
                <Search className="h-4 w-4" />
              </button>
              <CommandDialog open={showLocationCommand} onOpenChange={setShowLocationCommand}>
                <Command>
                  <CommandInput 
                    placeholder="Search locations..." 
                    value={locationSearch}
                    onValueChange={setLocationSearch}
                  />
                  <CommandList>
                    <CommandEmpty>No locations found.</CommandEmpty>
                    <CommandGroup>
                      {filteredLocations.map((location) => (
                        <CommandItem
                          key={location}
                          onSelect={() => {
                            setLocationSearch(location);
                            setShowLocationCommand(false);
                          }}
                        >
                          {location}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </CommandDialog>
            </div>
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
