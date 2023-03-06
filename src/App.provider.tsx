import React, { ReactNode, useCallback, useContext, useState } from 'react';
import { MoodEntry, MoodOption } from './models';

type AppContextType = {
  moodList: MoodEntry[];
  handleAddEntry: (mood: MoodOption) => void;
};

const defaultValue: AppContextType = {
  moodList: [],
  handleAddEntry: () => {},
};

const AppContext = React.createContext<AppContextType>(defaultValue);

export const useAppContext = () => useContext(AppContext);

type IProps = {
  children: ReactNode;
};
export const AppProvider = ({ children }: IProps) => {
  const [moodList, setMoodList] = useState<MoodEntry[]>([]);

  const handleAddEntry = useCallback((mood: MoodOption) => {
    setMoodList(current => [...current, { mood, timestamp: Date.now() }]);
  }, []);

  return (
    <AppContext.Provider value={{ moodList, handleAddEntry }}>
      {children}
    </AppContext.Provider>
  );
};
