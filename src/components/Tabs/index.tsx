import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

function UsersTabContent() {
  return (
    
    
      <h2>Lista de Usuários</h2>
     
 
  );
}

function RolesTabContent() {
  return (
    <div>
     
      <h2>Lista de Cargos</h2>
      
    </div>
  );
}

function ProcessesTabContent() {
  return (
    <div>
    
      <h2>Lista de Processos</h2>
     
    </div>
  );
}

export function TabsComponent() {
  return (
    <div style={{
        display: 'flex',
  
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        gap: '5rem',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '0.5rem',
        width: '100%',
        maxWidth: '80rem',
        }}
    >
      <Tabs defaultValue="users">
        <TabsList>
          <TabsTrigger value="users">Usuários</TabsTrigger>
          <TabsTrigger value="roles">Cargos</TabsTrigger>
          <TabsTrigger value="processes">Processos</TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <UsersTabContent />
        </TabsContent>
        <TabsContent value="roles">
          <RolesTabContent />
        </TabsContent>
        <TabsContent value="processes">
          <ProcessesTabContent />
        </TabsContent>
      </Tabs>
    </div>
  );
}


