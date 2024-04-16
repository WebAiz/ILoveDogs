import axiosInterceptorInstance from "@/shared/axios";

class DogService {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''
  }

  async getAllDogs() {
    const path = '/api/breeds/list/all'
    const response = await axiosInterceptorInstance.get(this.baseUrl + path); // Replace with your API endpoint
  }

  async getDogsByBreed(breed: string) {
    const path = `/api/breed/${breed}/images`
    const response = await axiosInterceptorInstance.get(this.baseUrl + path); // Replace with your API endpoint
  }

  async getAllSubBreeds(breed: string) {
    const path = `/api/breed/${breed}/list`
    const response = await axiosInterceptorInstance.get(this.baseUrl + path); // Replace with your API endpoint
  }

  async getRandomDogImage(count?: number) {
    const path = `/api/breeds/image/random/${count}`
    const response = await axiosInterceptorInstance.get(this.baseUrl + path); // Replace with your API endpoint
  }

  async getBreedImageList(breed: string, subBreed: string) {
    const path = `/api/breed/${breed}/${subBreed}/images`
    const response = await axiosInterceptorInstance.get(this.baseUrl + path); // Replace with your API endpoint
  }

  async getBreedImageRandom(breed: string, count?: number) {
    const path = `/api/breed/${breed}/images/random/${count}`
    const response = await axiosInterceptorInstance.get(this.baseUrl + path); // Replace with your API endpoint
  }
  async getSubBreedImageRandom(breed: string, subBreed: string, count?: number) {
    const path = `/api/breed/${breed}/${subBreed}/images/random/${count}`
    const response = await axiosInterceptorInstance.get(this.baseUrl + path); // Replace with your API endpoint
  }
}

export default new DogService();