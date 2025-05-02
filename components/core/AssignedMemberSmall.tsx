import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { Staff } from '@/common/interface/response.interface';

interface AssignedMemberSmallProps {
  staff: Staff[] | any;
}

const AssignedMemberSmall: FC<AssignedMemberSmallProps> = ({ staff }) => {
  return (
    <View className="flex flex-row items-end gap-1">
      {staff.slice(0, 2).map((staff: any, index: number) => (
        <View
          key={staff.GUID + index}
          className="flex flex-row items-center bg-[#22608c] text-white p-1 rounded-md w-8 h-8 justify-center">
          <Text className="text-white font-bold text-sm">{staff.Name[0]}</Text>
          <Text className="text-white font-bold text-sm">
            {staff.LastName[0]}
          </Text>
        </View>
      ))}
      {staff.length >= 3 && (
        <View className="flex flex-row items-center bg-slate-600 border-gray-400 border rounded-md p-1 min-w-8 h-8 justify-center">
          <Text className="font-bold text-sm text-white">
            + {staff.length - 2}
          </Text>
        </View>
      )}
    </View>
  );
};

export default AssignedMemberSmall;
