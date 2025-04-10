import { CheckIcon, Combobox, Group, Loader, Pill, PillsInput, ScrollArea, useCombobox, Text, } from '@mantine/core';
import { useState } from 'react'
import { CustomComboboxItem, CustomComboboxProp } from '../../interfaces/CustomComboboxProp'

const CustomCombobox = ({label, withGroup, options, groups}: CustomComboboxProp) => {
  const getAsyncGroupData = () => {
    return new Promise<CustomComboboxItem[]>((resolve) => {
      setTimeout(() => resolve(groups), 2000);
    });
  }
  const getAsyncData = () => {
    return new Promise<string[]>((resolve) => {
      setTimeout(() => resolve(options), 2000);
    });
  }

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>();
  const [dataGroups, setDataGroups] = useState<CustomComboboxItem[]>();
  const [search, setSearch] = useState('');
  const [value, setValue] = useState<string[]>([]);
  
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => {
      if (withGroup) {
        if (dataGroups?.length === 0 && !loading) {
          setLoading(true);
          getAsyncGroupData().then((response) => {
            setDataGroups(response);
            setLoading(false);
            combobox.resetSelectedOption();
          });
        }
      } else {
        if (data?.length === 0 && !loading) {
          setLoading(true);
          getAsyncData().then((response) => {
            setData(response);
            setLoading(false);
            combobox.resetSelectedOption();
          });
        }
      }
    },
  });
  
  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>{item}</Pill>
  ));

  let comboboxOptions;

  if (withGroup) {
    comboboxOptions = groups.map((item) => {
      const options = item.options.map((option) => (
        <Combobox.Option ml={15} value={option} key={option}>
          {option}
        </Combobox.Option>
      ));
  
      return (
        <Combobox.Group label={item.label} key={item.label}>
          {options}
        </Combobox.Group>
      );
    });
  } else {
    comboboxOptions = options
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          {value.includes(item) ? <CheckIcon size={12} /> : null}
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));
  }

  return (
    <>
      <Text size='sm' fw={500} >{label}</Text>
      <Combobox
          store={combobox}
          onOptionSubmit={handleValueSelect}
          withinPortal={false}
        >
          <Combobox.DropdownTarget>
              <PillsInput onClick={() => combobox.openDropdown()} rightSection={loading ? <Loader size={18} /> : <Combobox.Chevron />} >
                <Pill.Group>
                    {values}

                    <Combobox.EventsTarget>
                      <PillsInput.Field
                          onFocus={() => combobox.openDropdown()}
                          onBlur={() => combobox.closeDropdown()}
                          value={search}
                          placeholder="Search values"
                          onChange={(event) => {
                            combobox.updateSelectedOptionIndex();
                            setSearch(event.currentTarget.value);
                          }}
                          onKeyDown={(event) => {
                            if (event.key === 'Backspace' && search.length === 0) {
                                event.preventDefault();
                                handleValueRemove(value[value.length - 1]);
                            }
                          }}
                      />
                    </Combobox.EventsTarget>
                </Pill.Group>
              </PillsInput>
          </Combobox.DropdownTarget>

          <Combobox.Dropdown>
              <Combobox.Options>
                <ScrollArea.Autosize type='scroll' mah={200} >
                  {loading
                    ? <Combobox.Empty>Loading....</Combobox.Empty>
                    : (comboboxOptions.length > 0 ? comboboxOptions : <Combobox.Empty>Nothing found...</Combobox.Empty>)
                  }
                </ScrollArea.Autosize>
              </Combobox.Options>
          </Combobox.Dropdown>
      </Combobox>
  </>
  )
}

export default CustomCombobox