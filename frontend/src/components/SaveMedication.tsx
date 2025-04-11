import { Modal, TextInput, Select, Button, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { MedicationItem } from '../interfaces/MedicationItem';
import { IconBookmarkOff, IconBookmarkPlus } from '@tabler/icons-react';

export function SaveMedication(medication: MedicationItem) {
  const [savedMedications, setSavedMedications] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState(0);
  const [opened, { open, close }] = useDisclosure(false);
  const [currentMedication, setCurrentMedication] = useState<MedicationItem | null>(null);
  const [dosage, setDosage] = useState('');
  const [frequency, setFrequency] = useState('');
  const [routeAdmin, setRouteAdmin] = useState('');

  const handleSaveClick = (medication: MedicationItem) => {
    setCurrentMedication(medication);
    savedMedications.has(medication.id) ? handleSave(true) : open()
  };

  const handleSave = async (isSaved: boolean) => {
    if (!currentMedication) return;

    setLoading(true);
    setIsSaving(medication.id);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (isSaved) {
        setSavedMedications(prev => {
          const newSet = new Set(prev);
          newSet.delete(currentMedication.id);
          return newSet;
        });
      } else {
        setSavedMedications(prev => new Set(prev).add(currentMedication.id));
      }
    } catch (error) {
      console.error('Failed to save:', error);
    } finally {
        setIsSaving(0);
        setLoading(false);
        close();
        setDosage('');
        setFrequency('');
        setRouteAdmin('');
    }
  };

  return (
    <>
        <Button 
            w={150}
            variant="filled"
            loading={isSaving === medication.id}
            onClick={() => handleSaveClick(medication)}
            color={savedMedications.has(medication.id) ? "#D33F49" : "thistle"}
            leftSection={savedMedications.has(medication.id) ? <IconBookmarkOff size={18} /> : <IconBookmarkPlus size={18} />}
        >
            {savedMedications.has(medication.id) ? 'Unsave' : 'Save'}
        </Button>
        
        <Modal 
            centered
            opened={opened} 
            onClose={close}
            title={`Save ${currentMedication?.title}`}
        >
            <TextInput
                label="Dosage"
                placeholder="e.g., 500mg"
                value={dosage}
                onChange={(e) => setDosage(e.currentTarget.value)}
                mb="md"
            />

            <Select
                label="Frequency"
                data={[
                    'Once daily',
                    'Twice daily',
                    'Three times daily',
                    'Every 6 hours',
                    'As needed',
                    'Weekly'
                ]}
                value={frequency}
                onChange={(value) => setFrequency(value || '')}
                mb="xl"
            />

            <Select
                label="Route of Administration"
                data={["Orally", "Topically", "Intravenous", "Shot", "Inhaled", "Drops or spray", "Suppository", "Implanted"]}
                value={routeAdmin}
                onChange={(value) => setRouteAdmin(value || '')}
                mb="xl"
            />

            <Group justify="flex-end">
                <Button variant="default" onClick={close}>
                    Cancel
                </Button>
                <Button 
                    color='sea-green'
                    loading={loading}
                    onClick={() => handleSave(false)}
                    disabled={!dosage || !frequency || !routeAdmin}
                >
                    Confirm Save
                </Button>
            </Group>
        </Modal>
    </>
  );
}