import axiosInterceptorInstance from "@/shared/axios";

class DogService {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://dog.ceo";
  }

  async getAllDogs() {
    const path = "/api/breeds/list/all";
    const response = await axiosInterceptorInstance.get(this.baseUrl + path); // Replace with your API endpoint
    return response.data;
  }

  async getAllSubBreeds(breed: string) {
    const path = `/api/breed/${breed}/list`;
    const response = await axiosInterceptorInstance.get(this.baseUrl + path); // Replace with your API endpoint
    return response.data;
  }

  async getDogsImageByBreed(breed: string) {
    const path = `/api/breed/${breed}/images/random`;
    const response = await axiosInterceptorInstance.get(this.baseUrl + path); // Replace with your API endpoint
    return response.data;
  }

  async getRandomDogImage(count: number) {
    const path = `/api/breeds/image/random/${count}`;
    const response = await axiosInterceptorInstance.get(this.baseUrl + path); // Replace with your API endpoint
    return response.data;
  }

  async getSubBreedImageList(breed: string, subBreed: string) {
    const path = `/api/breed/${breed}/${subBreed}/images`;
    const response = await axiosInterceptorInstance.get(this.baseUrl + path); // Replace with your API endpoint
    return response.data;
  }

  async getBreedImageRandom(breed: string, count: number) {
    const path = `/api/breed/${breed}/images/random/${count}`;
    const response = await axiosInterceptorInstance.get(this.baseUrl + path); // Replace with your API endpoint
    return response.data;
  }
  async getSubBreedImageRandom(breed: string, subBreed: string) {
    const path = `/api/breed/${breed}/${subBreed}/images/random`;
    const response = await axiosInterceptorInstance.get(this.baseUrl + path); // Replace with your API endpoint
    return response.data;
  }
}

export default new DogService();
