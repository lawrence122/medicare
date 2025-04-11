import { CheckIcon, Combobox, Group, Loader, Pill, PillsInput, ScrollArea, useCombobox, Text } from '@mantine/core';
import { useState, useEffect } from 'react';
import { CustomComboboxItem, CustomComboboxProp } from '../../interfaces/CustomComboboxProp';

const CustomCombobox = ({
  label,
  withGroup,
  options,
  groups,
  multiSelect = false,
  required = false,
  value: externalValue,
  onChange,
  ...props
}: CustomComboboxProp) => {
  const getAsyncGroupData = () => {
    return new Promise<CustomComboboxItem[]>((resolve) => {
      setTimeout(() => resolve(groups), 500);
    });
  };

  const getAsyncData = () => {
    return new Promise<string[]>((resolve) => {
      setTimeout(() => resolve(options), 500);
    });
  };

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);
  const [dataGroups, setDataGroups] = useState<CustomComboboxItem[]>([]);
  const [search, setSearch] = useState('');
  const [internalValue, setInternalValue] = useState<string[]>([]);

  // Sync internal state with external value
  useEffect(() => {
    if (externalValue !== undefined) {
      if (multiSelect && Array.isArray(externalValue)) {
        setInternalValue(externalValue);
      } else if (!multiSelect && typeof externalValue === 'string') {
        setInternalValue(externalValue ? [externalValue] : []);
      }
    }
  }, [externalValue, multiSelect]);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => {
      if (withGroup) {
        if (dataGroups.length === 0 && !loading) {
          setLoading(true);
          getAsyncGroupData().then((response) => {
            setDataGroups(response);
            setLoading(false);
            combobox.resetSelectedOption();
          });
        }
      } else {
        if (data.length === 0 && !loading) {
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

  const handleValueSelect = (val: string) => {
    let newValue: string[];
    
    if (multiSelect) {
      newValue = internalValue.includes(val) 
        ? internalValue.filter((v) => v !== val) 
        : [...internalValue, val];
    } else {
      newValue = internalValue.includes(val) ? [] : [val];
      combobox.closeDropdown();
    }

    setInternalValue(newValue);
    
    // Notify parent component or form about the change
    if (onChange) {
      if (multiSelect) {
        onChange(newValue);
      } else {
        onChange(newValue[0] || '');
      }
    }
  };

  const handleValueRemove = (val: string) => {
    const newValue = internalValue.filter((v) => v !== val);
    setInternalValue(newValue);
    
    if (onChange) {
      if (multiSelect) {
        onChange(newValue);
      } else {
        onChange('');
      }
    }
  };

  const values = internalValue.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  let comboboxOptions;

  if (withGroup) {
    comboboxOptions = dataGroups.map((item) => {
      const options = item.options.map((option) => (
        <Combobox.Option ml={15} value={option} key={option}>
          <Group gap="sm">
            {internalValue.includes(option) ? <CheckIcon size={12} /> : null}
            {option}
          </Group>
        </Combobox.Option>
      ));

      return (
        <Combobox.Group label={item.label} key={item.label}>
          {options}
        </Combobox.Group>
      );
    });
  } else {
    comboboxOptions = (options || data)
      .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
      .map((item) => (
        <Combobox.Option value={item} key={item}>
          <Group gap="sm">
            {internalValue.includes(item) ? <CheckIcon size={12} /> : null}
            <span>{item}</span>
          </Group>
        </Combobox.Option>
      ));
  }

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={handleValueSelect}
      withinPortal={false}
      {...props}
    >
      <Combobox.DropdownTarget>
        <PillsInput
          label={label} required={required}
          onClick={() => combobox.openDropdown()}
          rightSection={loading ? <Loader size={18} /> : <Combobox.Chevron />}
        >
          <Pill.Group>
            {values}

            <Combobox.EventsTarget>
              <PillsInput.Field
                onFocus={() => combobox.openDropdown()}
                onBlur={() => combobox.closeDropdown()}
                value={search}
                onChange={(event) => {
                  combobox.updateSelectedOptionIndex();
                  setSearch(event.currentTarget.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && search.length === 0) {
                    event.preventDefault();
                    if (internalValue.length > 0) {
                      handleValueRemove(internalValue[internalValue.length - 1]);
                    }
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize type="scroll" mah={200}>
            {loading ? (
              <Combobox.Empty>Loading...</Combobox.Empty>
            ) : comboboxOptions.length > 0 ? (
              comboboxOptions
            ) : (
              <Combobox.Empty>Nothing found...</Combobox.Empty>
            )}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default CustomCombobox;