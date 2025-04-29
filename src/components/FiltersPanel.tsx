
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
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Product, ProductType } from "@/types/product";

const SIZES = ["S", "M", "L", "XL", "2XL", "3XL", "4XL"];
const LOCATIONS = ["KL", "Putra Heights", "Subang", "Damansara", "Putrajaya", "Selangor", "Shah Alam"];
const THEMES = ["Malay", "Western", "Indian", "Chinese"];
const COLORS = ["White", "Ivory", "Pink", "Red", "Blue", "Green", "Gold", "Silver", "Black"];
const VENDORS = ["Vendor A", "Vendor B", "Vendor C"];
const PRODUCT_TYPES = ["Set Match", "Bride", "Groom"];

interface FiltersPanelProps {
  onApplyFilters: (filters: FilterOptions) => void;
}

export interface FilterOptions {
  productType: ProductType | "";
  vendor: string;
  location: string;
  theme: string;
  color: string;
  priceRange: number[];
  sizes: string[];
}

export const FiltersPanel: React.FC<FiltersPanelProps> = ({ onApplyFilters }) => {
  const [vendorSearch, setVendorSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [showVendorCommand, setShowVendorCommand] = useState(false);
  const [showLocationCommand, setShowLocationCommand] = useState(false);
  
  // Filter states
  const [productType, setProductType] = useState<ProductType | "">("");
  const [vendor, setVendor] = useState("");
  const [location, setLocation] = useState("");
  const [theme, setTheme] = useState("");
  const [color, setColor] = useState("");
  const [priceRange, setPriceRange] = useState([0]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const filteredVendors = VENDORS.filter(vendor =>
    vendor.toLowerCase().includes(vendorSearch.toLowerCase())
  );

  const filteredLocations = LOCATIONS.filter(location =>
    location.toLowerCase().includes(locationSearch.toLowerCase())
  );

  const handleSizeToggle = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size) 
        : [...prev, size]
    );
  };

  const handleSearch = () => {
    onApplyFilters({
      productType: productType as ProductType | "",
      vendor,
      location,
      theme,
      color,
      priceRange,
      sizes: selectedSizes
    });
  };

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg border border-baju-input-border">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-baju-heading mb-4">Filters</h3>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-baju-text mb-1.5 block">Product Type</label>
            <Select onValueChange={(value) => setProductType(value as ProductType | "")}>
              <SelectTrigger className="w-full border-baju-input-border">
                <SelectValue placeholder="Select product type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                <SelectItem value="set">Set Match</SelectItem>
                <SelectItem value="bride">Bride</SelectItem>
                <SelectItem value="groom">Groom</SelectItem>
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
                <span>{vendor || "Search vendor..."}</span>
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
                      {filteredVendors.map((v) => (
                        <CommandItem
                          key={v}
                          onSelect={() => {
                            setVendor(v);
                            setShowVendorCommand(false);
                          }}
                        >
                          {v}
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
                <span>{location || "Search location..."}</span>
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
                      {filteredLocations.map((loc) => (
                        <CommandItem
                          key={loc}
                          onSelect={() => {
                            setLocation(loc);
                            setShowLocationCommand(false);
                          }}
                        >
                          {loc}
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
            <Select onValueChange={setTheme}>
              <SelectTrigger className="w-full border-baju-input-border">
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Themes</SelectItem>
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
            <Select onValueChange={setColor}>
              <SelectTrigger className="w-full border-baju-input-border">
                <SelectValue placeholder="Select color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Colors</SelectItem>
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
              onValueChange={setPriceRange}
            />
            <div className="text-sm text-baju-subtext">
              RM{priceRange[0]} - RM5000
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-baju-text block">Sizes</label>
            <div className="grid grid-cols-4 gap-4">
              {SIZES.map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`size-${size}`} 
                    checked={selectedSizes.includes(size)}
                    onCheckedChange={() => handleSizeToggle(size)}
                  />
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
          
          <Button 
            className="w-full mt-4" 
            onClick={handleSearch}
          >
            <Search className="mr-2 h-4 w-4" /> Search Products
          </Button>
        </div>
      </div>
    </div>
  );
};
