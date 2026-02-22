import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,              
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 12,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
  },
    button1: {
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#0eff3aff',
    borderRadius: 6,
  },
  button2: {
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ed0505ff',
    borderRadius: 6,
    marginTop: 30
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  containerr: {
    flexDirection: "row",   
    justifyContent: "flex-start", 
    marginTop: 150,
    marginLeft:50
  },
  buttonWrapper: {
    marginRight: 8, 
  },
   row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10, 
   }
});