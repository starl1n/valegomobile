import AsyncStorage from "@react-native-async-storage/async-storage";

export class StorageAdapter {
  static async getItem(key: string): Promise<string | null> {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      return null;
    }
  }

  static async setItem(key: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      throw new Error(`Error setting item ${key} ${value}`);
    }
  }

  static async delItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      throw new Error(`Error deleting item ${key}`);
    }
  }

  static async getAllData(): Promise<any> {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      return result;
      // result.forEach(([key, value]) => {
      //   console.log(`Key: ${key}, Value: ${value}`);
      // });
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  static async clearAllData(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log("Error clearing data:", error);
    }
  }
}
