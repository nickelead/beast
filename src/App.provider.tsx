import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MoodEntry, MoodOption } from './models';

type AppContextType = {
  moodList: MoodEntry[];
  handleAddEntry: (mood: MoodOption) => void;
  handleDeleteEntry: (mood: MoodEntry) => void;
};

const defaultValue: AppContextType = {
  moodList: [],
  handleAddEntry: () => {},
  handleDeleteEntry: () => {},
};

const AppContext = React.createContext<AppContextType>(defaultValue);

const storageKey = 'my-app-data';

type AppData = {
  moods: MoodEntry[];
};

const getAppData = async (): Promise<AppData | null> => {
  try {
    const data = await AsyncStorage.getItem(storageKey);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch {
    return null;
  }
};

const setAppData = async (newData: AppData) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(newData));
  } catch {}
};

export const useAppContext = () => useContext(AppContext);

type IProps = {
  children: ReactNode;
};
export const AppProvider = ({ children }: IProps) => {
  const [moodList, setMoodList] = useState<MoodEntry[]>([]);

  useEffect(() => {
    const getDataFromStorage = async () => {
      const data = await getAppData();
      if (data) {
        setMoodList(data.moods);
      }
    };
    getDataFromStorage();
  }, []);

  const handleAddEntry = useCallback((mood: MoodOption) => {
    setMoodList(current => {
      const newMoodList = [...current, { mood, timestamp: Date.now() }];
      setAppData({ moods: newMoodList });
      return newMoodList;
    });
  }, []);

  const handleDeleteEntry = useCallback((mood: MoodEntry) => {
    setMoodList(currentList => {
      const newList = currentList.filter(
        ({ timestamp }) => timestamp !== mood.timestamp,
      );
      setAppData({ moods: newList });
      return newList;
    });
  }, []);

  return (
    <AppContext.Provider
      value={{ moodList, handleAddEntry, handleDeleteEntry }}>
      {children}
    </AppContext.Provider>
  );
};
