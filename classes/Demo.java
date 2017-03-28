class Animal {

	public String name;

	public Animal() {

	}

	public Animal(String name) {
		this.name = name;
	}
	
	public void speak() {
		System.out.println(this.name + " speaks!");
	}
}

class Dog extends Animal {

	public Dog(String name) {
		super(name);
	}

	public void speak() {
		System.out.println(this.name + " barks!");
	}
}

public class Demo {

	public static void main(String args[]) {
		System.out.println("hello");
		Dog obj = new Dog("Uchia");
		obj.speak();
	}
}
