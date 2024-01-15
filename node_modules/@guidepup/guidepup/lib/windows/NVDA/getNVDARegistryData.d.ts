import { REG_SZ_Value, RegistryItem } from "regedit";
interface NVDARegistryItem extends RegistryItem {
    values: {
        [name: string]: REG_SZ_Value;
    };
}
export declare function getNVDARegistryData(): Promise<NVDARegistryItem>;
export {};
